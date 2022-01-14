import styled from 'styled-components'
import Routes from "./Routes";
import Header from "./views/.shared/Header";
import {GlobalStyle} from "./style/GlobalStyled";

const App = () => {
    return(
        <Container>
            <GlobalStyle/>
            <Header/>
            <Routes/>
        </Container>
    )
};

const Container = styled.div`

`;

export default App;
