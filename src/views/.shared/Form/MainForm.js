import styled from 'styled-components'
import {DefaultButton} from "../Button/Button.styled";
import {useForm} from "react-hook-form";

const MainForm = ({onSubmit, data ={}}) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    return(
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <h2>Title</h2>
                <Input type={'text'} {...register("title")} defaultValue={data.title || ''}/>
                <h4>Description</h4>
                <TextArea type={'text'} {...register("description")} defaultValue={data.description || ''}/>
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

export default MainForm;
