import styled from 'styled-components'
import {useHistory} from "react-router-dom";

const TodoItem = ({item}) => {
    const history = useHistory()

    const onClick = () => {
        history.push(`/detail/${item.id}`)
    }

    return(
        <Container onClick={onClick}>
            {item.title}
        </Container>
    )
};

const Container = styled.div`
  border-radius: 4px;
  padding: 10px;
  min-width: 500px;
  background-color: #eee;
  text-align: center;
  cursor: pointer;
  
`;

export default TodoItem;
