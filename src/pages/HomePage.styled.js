import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
color: blue;
font-size: 20px;
margin-bottom: 10px;

&.active {
    color: red;
}
`

export const Title = styled.h1`
color: black;
font-size: 40px;
margin-left: 40px;
`

export const Ul = styled.ul`
color: black;
margin: 40px;
padding: 20px;
display: flex;
flex-direction: column;
gap: 10px
`