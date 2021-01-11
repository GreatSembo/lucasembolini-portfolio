import React, { FunctionComponent } from 'react';
import { Container } from "@chakra-ui/react"
import ParticlesBackground from "../particles";
type LayoutProps = {
    particle?: boolean,
    background?:string
}


const PageLayout: FunctionComponent<LayoutProps> = (props) => {
    return <Container w="100%" h="100%" maxWidth="100%" display="inline-flex" paddingLeft={{ sm: "10px", md: "80px" }} paddingRight={{ sm: "10px", md: "0px" }}
            backgroundImage={props.background ? 'url("'+props.background+'")':'none'} backgroundSize="cover">
        {props.particle &&
            <ParticlesBackground />}
        
        {props.children}
    </Container>
}

export default PageLayout;