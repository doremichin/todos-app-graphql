import styled from 'styled-components'
import { gql } from "apollo-boost";
import {Query, useQuery} from "react-apollo";
import MainList from "../../.shared/List/MainList";
import TodoItem from "../../.shared/Item/TodoItem";


const GET_CONTINENTS = gql`
  query {
    todos {
      id,
      title,
      description
    }
  }
`;

const HomeContainer = () => {

    const {loading, error, data, refetch } = useQuery(GET_CONTINENTS)
    if(loading) return <p>loading...</p>
    if(error) return <p>error...</p>

    const renderItem = (item) => <TodoItem item={item}/>
    return(
        <Container>
            <MainList data={data.todos} renderItem={renderItem}/>
        </Container>
    )
};

const Container = styled.div`
  padding-top: 50px;
`;

export default HomeContainer;
