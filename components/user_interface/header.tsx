import styled from "@emotion/styled";
import { FunctionComponent } from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";

const StyledHeader = styled.header`
    
    position: realtive;
    background: rgb(255,0,0);
    background: -moz-linear-gradient(225deg, rgba(255,0,0,1) 0%, rgba(213,0,255,1) 100%);
    background: -webkit-linear-gradient(225deg, rgba(255,0,0,1) 0%, rgba(213,0,255,1) 100%);
    background: linear-gradient(225deg, rgba(255,0,0,1) 0%, rgba(213,0,255,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ff0000",endColorstr="#d500ff",GradientType=1);
    color: #ffffff;

    height: 250px;

`;

interface Props {
    
    pageTitle: string;
    
}

const Header: FunctionComponent<Props> = ({ pageTitle }: Props) => {
    return(
        <StyledHeader>
            <Container className="d-flex justify-content-left align-items-center h-100">
                <motion.h1 className="m-0">{ pageTitle }</motion.h1>
            </Container>
        </StyledHeader>
    );
};

export default Header;