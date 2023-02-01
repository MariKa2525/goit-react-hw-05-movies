import { Nav, StyledLink, Ul } from "./Navigation.styled"

export const Navigation = () => {
    return(
        <Nav>
            <Ul>
                <li><StyledLink to='/'>Home</StyledLink></li>
                <li><StyledLink to='movies'>Movies</StyledLink></li>
            </Ul>
        </Nav>
    )
}