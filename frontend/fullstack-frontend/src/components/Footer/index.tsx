import { Paragraph } from "../../styles/Typography";
import { StyledFooter } from "./style"

interface IFooterProps {
    position?: string;
    position2?: string;
}

export const Footer = ({ position, position2 }: IFooterProps) =>{
    return(
        <>
            <StyledFooter position={position} position2={position2}>
                    <img  alt="" />
                    <Paragraph font="var(--color-white)">Todos os direitos reservados</Paragraph>
            </StyledFooter>
        </>
    )
}