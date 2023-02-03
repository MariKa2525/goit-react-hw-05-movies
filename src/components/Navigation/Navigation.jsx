import { Nav, StyledLink, Ul } from "./Navigation.styled"

export const Navigation = () => {
    return(
        <Nav>
            <Ul>
                <StyledLink to='/'>Home</StyledLink>
                <StyledLink to='movies'>Movies</StyledLink>
            </Ul>
        </Nav>
    )
}