import React, { useEffect, useRef, Component } from "react";
import { Container, Box, Stack, SimpleGrid, Image, Link } from "@chakra-ui/react"
import {
    AiOutlineAppstore,
    AiOutlineAudit,
    AiOutlineUser,
    AiOutlineRadarChart,
    AiOutlineInstagram,
    AiOutlineGithub,
    AiOutlineLinkedin, AiOutlineMail, AiOutlineWindows,
    AiOutlineMenu
} from "react-icons/ai";
import { useLocation } from "wouter"
import Logo from "../../assets/logo"
import Cyber from "../../assets/cyber.png"
import SideIcon from '../icon';
import { Link as WouterLink } from "wouter";

// All of these will produce the same html:
// <a href="/foo" class="active">Hello!</a>

// lazy form: `a` element is constructed around children

function SideBar() {
    const [location, setLocation] = useLocation();
    return (
        <Container zIndex="1" w={{ sm: "100%", md: "80px" }} maxW="100%" h={{ sm: "70px", md: "100%" }} 
        padding={{ sm: "0 10px ", md: "10px 0" }} marginLeft="0px" position="fixed" bgColor="jet"
        boxShadow="inset 0px 0px 4px 2px #2fbf71">

            <SimpleGrid h="100%" spacing="40px" gridTemplateRows={{ sm: "1", md: "minmax(60px, 300px) 1fr minmax(200px, 300px)" }} gridTemplateColumns={{ sm: "1fr 1fr", md: "80px" }}>
                {/* <Image src={Logo} alt="Luca Sembolini" w="50px" h="50px"/> */}
                <Box marginTop="15px" marginBottom="auto" cursor="pointer" position="relative" onClick={()=>setLocation('/')}>

                    <Image src={Cyber} w="80px" maxHeight={{ sm: "65px",md:"110px"}} width={{sm:"auto",md:"95%"}} margin={{sm:"-10px auto 0px 0px",md:"auto"}}/>
                
                    {/* <Logo2 w="80px" h="110px" /> */}
                </Box>
                {/* <Icon as={Logo} w={"80px"} h={"100px"} margin="20px 0" /> Replace with logo */}
                <Stack direction={{ sm: "row", md: "column", base: "column" }} spacing="10px" margin="auto auto" position="relative">
                    {/* <Link as={WouterLink} to="/skills" > */}
                    <SideIcon as={AiOutlineWindows} linkTo={"/"} textHover="home"/>
                    <SideIcon as={AiOutlineUser} linkTo={ "/about"} textHover="about"/>
                    <SideIcon as={AiOutlineRadarChart} linkTo={ "/skills"} textHover="skills"/>
                    <SideIcon as={AiOutlineMail} linkTo={ "/contact"} textHover="contact"/>

                </Stack>
                <Stack direction={{ sm: "row", md: "column", base: "column" }} spacing="10px" margin="auto auto" position="relative" display={{ sm: "none", md: "flex" }}>
                    <SideIcon as={AiOutlineLinkedin} linkTo="https://www.linkedin.com/in/luca-sembolini" icon/>
                    <SideIcon as={AiOutlineGithub} linkTo="https://github.com/GreatSembo" icon/>
                    <SideIcon as={AiOutlineInstagram} linkTo="https://www.instagram.com/running_sembo/" icon />
                    

                </Stack>
                {/* <Box padding="4" bg="gray.100" maxW="3xl">
            There are many benefits to a joint design and development system. Not only
            does it bring benefits to the design team.
        </Box> */}
            </SimpleGrid>
        </Container>
    )
}
export default SideBar;
