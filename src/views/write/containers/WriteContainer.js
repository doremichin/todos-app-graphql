import styled from 'styled-components'
import WriteForm from "../components/WriteForm";

const WriteContainer = () => {
    return(
        <Container>
            <WriteForm/>
        </Container>
    )
};

const Container = styled.div`
  padding-top: 50px;
`;

export default WriteContainer;
