import styled from 'styled-components'
import {gql} from "apollo-boost";
import {useParams} from "react-router-dom";
import {useQuery} from "react-apollo";
import DetailComponent from "../components/DetailComponent";


const GET_TODO = gql`
      query Todo($id : Int!){
        todo(id : $id) {
          id,
          title,
          description
        }
      }
    `;

const DetailContainer = () => {

    const {id} = useParams();
    const int = parseInt(id)
    const {loading, error, data, refetch } = useQuery(GET_TODO,{variables : {id : int} })
    if(loading) return <p>loading...</p>
    if(error) return <p>error...</p>

    return(
        <Container>
            <DetailComponent data={data.todo}/>
        </Container>
    )
};

const Container = styled.div`
  padding-top: 50px;
`;

export default DetailContainer;
