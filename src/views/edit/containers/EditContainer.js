import styled from 'styled-components'
import EditForm from "../components/EditForm";
import {gql} from "apollo-boost";
import {useParams} from "react-router-dom";
import {useQuery} from "react-apollo";

const GET_TODO = gql`
      query Todo($id : Int!){
        todo(id : $id) {
          id,
          title,
          description
        }
      }
    `;


const EditContainer = () => {

    const {id} = useParams();
    const int = parseInt(id)
    const {loading, error, data } = useQuery(GET_TODO,{variables : {id : int} })
    if(loading) return <p>loading...</p>
    if(error) return <p>error...</p>


    return(
        <Container>
            <EditForm data={data}/>
        </Container>
    )
};

const Container = styled.div`

`;

export default EditContainer;
