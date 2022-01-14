import styled from 'styled-components'
import Nav from "./Nav";

const Header = () => {
    return(
        <Container>
            <Logo>
                Todos!
            </Logo>
            <Nav/>
        </Container>
    )
};

const Container = styled.div`
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow:  1px 1px 6px #eee;
`;
const Logo = styled.div`
  
`;


export default Header;
