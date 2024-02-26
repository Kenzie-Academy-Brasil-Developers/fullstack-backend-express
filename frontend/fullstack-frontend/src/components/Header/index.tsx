import { Link } from "react-router-dom"
import { InnerDiv, StyledDiv, StyledImg } from "./style"

export const Header = ({}) => {
    return (
        <StyledDiv>
            <Link to={"/"}><StyledImg  alt=""/></Link>
            <InnerDiv >
                <Link className="loginLink" to={"/"}>acesso</Link>
                <Link to={"/search"}><img className="magnifier"  alt="lupa de procurar"/></Link> 
            </InnerDiv>
        </StyledDiv>
    )
}