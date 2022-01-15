import styled from 'styled-components'
import MainForm from "../../.shared/Form/MainForm";
import {gql} from "apollo-boost";
import {useMutation} from "react-apollo";
import {useHistory} from "react-router-dom";

const EDIT_TODO = gql`
  mutation Edit_Todo ($id : Int, $title : String, $description : String){
    editTodo(id: $id, title : $title , description : $description) {
      id,
      title,
      description
    }
  }
`

const EditForm = ({data}) => {
    const history = useHistory();
    const onSubmit = ({title, description}) => {
        editTodo({variables: { id: data.todo.id ,title , description}});
    }
    const [editTodo] = useMutation(EDIT_TODO, {onCompleted : () => history.push('/')})
    return(
        <Container>
            <MainForm onSubmit={onSubmit} data={data.todo}/>
        </Container>
    )
};

const Container = styled.div`

`;

export default EditForm;
