import React, { useState } from "react"
import { useForm } from "react-hook-form";
import PageLayout from "../components/layout/pageLayout"
import {
  Flex,
  Box,
  Text, Center, Heading, Image, List, ListItem, ListIcon
} from "@chakra-ui/react";
import Mountain from "../assets/beyond_back.jpg"
import ProfilePicture from "../assets/profile.jpg"
import { AiOutlineFundProjectionScreen, AiOutlineRead } from "react-icons/ai";
import SkillsChart from "../components/skillsChart";

export default function Skills() {

  return (
    <PageLayout background={Mountain}>
      <Flex color="white" flexDirection={{ sm: "column", md: "row" }} fontSize={{sm:"sm",lg:"lg"}}>
        <Center w={{sm:"100%",lg:"35%"}} mt={{sm:"80px",lg:"0px"}} flexDirection="column">
        <Heading as="h1" size="xl" margin="0px auto 80px 20px" alignSelf="flex-start" >About Me</Heading>
          <Image src={ProfilePicture} alt="Luca Sembolini" maxWidth="50%" />
          <Text padding="20px" textAlign="center">I'm an Italian guy that loves challenges and I'm always looking for a new goal to accomplish. 
          Having an healthy lifestyle is my number one priority. Focused Developer on the working our and fitness enthusiast on every other of the day</Text>
        </Center>
        <Center>
            <SkillsChart/>
        </Center>
      
         

      

      </Flex>

    </PageLayout>
  );

}