import styled, {css} from 'styled-components'
import {gql} from "apollo-boost";
import {useMutation} from "react-apollo";
import {useHistory, useParams} from "react-router-dom";

const DELETE_TODO = gql`
  mutation Delete_Todo($id: Int!) {
    deleteTodo(id: $id) {
      id
    }
  }
`

const DetailComponent = ({data}) => {
    const {id} = useParams()
    const int = parseInt(id)
    const history = useHistory();

    function execDeleteTodo () {
        if (window.confirm('이 항목을 삭제하시겠습니까?')) {
            deleteTodo({variables: {id : int}})
        }
    }
    const [deleteTodo] = useMutation(
        DELETE_TODO, { onCompleted: () => {} })

    const editClick = () => {
        history.push(`/edit/${id}`)
    }

    return(
        <Container>
            <Title>
                {data.title}
            </Title>
            <Description>
                {data.description}
            </Description>
            <Buttons>
                <Button edit onClick={editClick}>수정</Button>
                <Button delete onClick={execDeleteTodo}>삭제</Button>
            </Buttons>
        </Container>
    )
};

const Container = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;
const Title = styled.h1`
  margin-bottom: 30px;
`;
const Description = styled.div`
  margin-bottom: 30px;
`;
const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Button = styled.div`
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;
  display: inline-block;
  padding: 8px 10px;
  color: #fff;
  ${props => props.edit ? css`
    background-color: #18f;
  ` : css`
    background-color: #d92424;
  `}
`;
export default DetailComponent;
