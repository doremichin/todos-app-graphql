import styled from 'styled-components'
import {useForm} from "react-hook-form";
import {DefaultButton} from "../../.shared/Button/Button.styled";
import {gql} from "apollo-boost";
import {useMutation} from "react-apollo";
import {useHistory} from "react-router-dom";


const ADD_TODO = gql`
  mutation AddTodo($title: String!, $description : String!) {
    addTodo(title : $title, description : $description) {
      title
      description
    }
  }
`

const WriteForm = () => {
    const history = useHistory();

    function execAddTodo (title, description) {
        addTodo({variables: { title , description}})
    }

    const [addTodo] = useMutation(ADD_TODO,{ onCompleted: () => {history.push('/')}})


    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        execAddTodo(data.title, data.description)
    };
    return(
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <h2>Title</h2>
                <Input type={'text'} {...register("title")}/>
                <h4>Description</h4>
                <TextArea type={'text'} {...register("description")} />
                <ButtonSubmit>Submit</ButtonSubmit>
            </Form>
        </Container>
    )
};

const Container = styled.div`

`;
const Form = styled.form`
  margin: 0 auto;
  width: 500px;
  display: flex;
  flex-direction: column;
  
`;
const Input = styled.input`
  padding: 6px 10px;
  margin-bottom: 20px;
`;
const TextArea = styled.textarea`
  min-height: 300px;
  margin-bottom: 20px;
`;
const ButtonSubmit = styled(DefaultButton)`
  padding: 10px;
  background-color: #ddd;
  
`;

export default WriteForm;
