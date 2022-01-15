import styled from 'styled-components'
import {gql} from "apollo-boost";
import {useMutation} from "react-apollo";
import {useHistory} from "react-router-dom";
import MainForm from "../../.shared/Form/MainForm";


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
    //add를 실행했을때
    function execAddTodo (title, description) {
        addTodo({variables: { title , description}})
    }

    const [addTodo] = useMutation(ADD_TODO,{ onCompleted: () => {history.push('/')}})

    const onSubmit = (data) => {
        console.log(data)
        execAddTodo(data.title, data.description)
    };
    return(
        <Container>
            <MainForm onSubmit={onSubmit}/>
        </Container>
    )
};

const Container = styled.div`

`;

export default WriteForm;
