import styled from 'styled-components'
import { gql } from "apollo-boost";
import { useQuery} from "react-apollo";
import MainList from "../../.shared/List/MainList";
import TodoItem from "../../.shared/Item/TodoItem";
import {useEffect} from "react";


const GET_TODOS = gql`
  query {
    todos {
      id,
      title,
      description
    }
  }
`;

const HomeContainer = () => {

    const {loading, error, data, refetch } = useQuery(GET_TODOS)
    if(loading) return <p>loading...</p>
    if(error) return <p>error...</p>

    const renderItem = (item) => <TodoItem item={item}/>

    refetch()

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
