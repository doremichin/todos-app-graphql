import styled from 'styled-components'
import {Link} from "react-router-dom";

const Nav = () => {
    return(
        <Container>
            <NavItem to={'/'}>Home</NavItem>
            <NavItem to={'/write'}>Write</NavItem>
        </Container>
    )
};

const Container = styled.div`
  display: flex;
  align-items: center;
`;
const NavItem = styled(Link)`
  display: inline-block;
  height: 60px;
  padding: 0 10px;
  display: flex;
  align-items: center;
`;

export default Nav;
