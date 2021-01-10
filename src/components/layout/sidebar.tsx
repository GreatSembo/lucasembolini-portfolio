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
import Logo from "../../assets/logo"
import SideIcon from '../icon';
import { Link as WouterLink } from "wouter";

// All of these will produce the same html:
// <a href="/foo" class="active">Hello!</a>

// lazy form: `a` element is constructed around children

function SideBar() {
    return (
        <Container w={{ sm: "100%", md: "80px" }} maxW="100%" h={{ sm: "100px", md: "100%" }} padding="10px 0" marginLeft="0px" position="fixed" bgColor="forest_green_traditional">

            <SimpleGrid h="100%" spacing="40px" gridTemplateRows={{ sm: "1", md: "minmax(60px, 300px) 1fr minmax(200px, 300px)" }} gridTemplateColumns={{ sm: "minmax(50px, 100px) 1fr", md: "80px" }}>
                {/* <Image src={Logo} alt="Luca Sembolini" w="50px" h="50px"/> */}
                <Box marginTop="-25px" position="relative">
                    <Logo w="80px" h="110px" />
                </Box>
                {/* <Icon as={Logo} w={"80px"} h={"100px"} margin="20px 0" /> Replace with logo */}
                <Stack direction={{ sm: "row", md: "column", base: "column" }} spacing="10px" margin="auto auto" position="relative">
                    {/* <Link as={WouterLink} to="/skills" > */}
                    <SideIcon as={AiOutlineWindows} linkTo="/"/>
                    <SideIcon as={AiOutlineUser} linkTo="/about" />
                    <SideIcon as={AiOutlineRadarChart} linkTo="/skills" />
                    <SideIcon as={AiOutlineMail} linkTo="/contact" />

                </Stack>
                <Stack direction={{ sm: "row", md: "column", base: "column" }} spacing="10px" margin="auto auto" position="relative" display={{ sm: "none", md: "flex" }}>
                    <SideIcon as={AiOutlineLinkedin} />
                    <SideIcon as={AiOutlineInstagram} />
                    <SideIcon as={AiOutlineGithub} linkTo="https://github.com/GreatSembo"/>

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
