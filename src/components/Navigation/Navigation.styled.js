import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(NavLink)`
padding: 8px 8px;
border-radius: 4px;
text-decoration: none;
color: black;
font-weight: 500;
font-size: 25px;

&.active {
    color:  orangered;
}
`

export const Nav = styled.nav`
padding: 8px 0px;

border-radius: 4px;
color: black;
font-weight: 500;
font-size: 25px;

&.active {
    color:  orangered;
}
`
export const Ul = styled.ul`
display: flex;
list-style-type: none; 
padding: 0px;
`
