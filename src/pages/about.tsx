import React, { useState } from "react"
import { useForm } from "react-hook-form";
import PageLayout from "../components/layout/pageLayout"
import {
  Flex,
  Box,
  Text, Center, Heading, Image, List, ListItem, ListIcon
} from "@chakra-ui/react";
import Mountain from "../assets/beyond_back.jpg"
import ProfilePicture from "../assets/profile-altra.jpg"
import { AiOutlineFundProjectionScreen, AiOutlineRead } from "react-icons/ai";

export default function About() {

  return (
    <PageLayout background={Mountain}>
      <Flex color="white" flexDirection={{ sm: "column", md: "row" }} fontSize={{sm:"sm",lg:"lg"}} >
        <Center w={{sm:"100%",lg:"35%"}} mt={{sm:"80px",lg:"0px"}} flexDirection="column">
        <Heading   as="h1" size="2xl" margin="0px auto 20px 40px" alignSelf="flex-start" >About Me</Heading>
          <Image src={ProfilePicture} alt="Luca Sembolini" padding="40px"/>
          <Text padding="0px 40px" fontSize="xl" textAlign="left">I'm an Italian guy that loves challenges and I'm always looking for a new goal to accomplish. 
          Having an healthy lifestyle is my number one priority. Focused Developer on the working hours and fitness enthusiast on the remain time</Text>
        </Center>
        <Center w={{sm:"100%",lg:"65%"}} flexDirection="column" padding="40px">
          <Heading as="h2" size="xl" alignSelf="flex-start">Education</Heading>
          <List spacing={1} alignSelf="flex-start" fontSize="xl" padding="10px">
            <ListItem>
              <ListIcon as={AiOutlineRead} color="white" />
              <b className="greenLizardColor">Java Academy</b> - 200 hours (2016)
            </ListItem>
            <ListItem>
              <ListIcon as={AiOutlineRead} color="white" />
              <b className="greenLizardColor">Project Erasmus</b>- Kraków, 6 Months (2015-2016)
            </ListItem>
            <ListItem>
              <ListIcon as={AiOutlineRead} color="white" />
              <b className="greenLizardColor">Computer Science Degree</b> - University of Perugia, 2013 - 2016
            </ListItem>
            <ListItem>
              <ListIcon as={AiOutlineRead} color="white" />
              <b className="greenLizardColor">Accountant and Developer</b> - High School Franchetti Salviani, 2008-2013
            </ListItem>
          </List>

          <Heading as="h2" size="xl" alignSelf="flex-start">Work Experience</Heading>
          <List spacing={3} alignSelf="flex-start" fontSize="xl" padding="10px">
            <ListItem>
              <ListIcon as={AiOutlineFundProjectionScreen} color="white" />
              <b className="greenLizardColor">Full Stack Developer</b> - Reply S.p.A. | 2019 - Present
              <Text ml="1.5em">
                Development of an e-commerce websites using React
                Deploy and design of AWS serverless architectures using the Serverless framework and AWS console. 
                Scalable backend using Java and Node.js.
              </Text>
            </ListItem>
            <ListItem>
              <ListIcon as={AiOutlineFundProjectionScreen} color="white" />
              <b className="greenLizardColor">Junior .NET Developer</b> - Nextre Engineering | 2018 - 2019
              <Text ml="1.5em">
                Development of web services and MVC application using C#.
                Development of a custom IoT platform using ThingWorx with Javascript.
              </Text>
            </ListItem>
            <ListItem>
              <ListIcon as={AiOutlineFundProjectionScreen} color="white" />
              <b className="greenLizardColor">Junior Java Developer and Data Scientist</b> - Sharper Analytics srl | 2017 - 2018
              <Text ml="1.5em">
                Development and maintenance of java applications.
                Data Mining and application of machine learning algorithms for a recommendation system.
              </Text>
            </ListItem>
            <ListItem>
              <ListIcon as={AiOutlineFundProjectionScreen} color="white" />
              <b className="greenLizardColor">Junior .NET Developer</b> - Be Solution S.p.A | 2017 - 2018
              <Text ml="1.5em">Development and maintenance of java applications.
              Data Mining and application of machine learning algorithms for a recommendation system.
                </Text>
            </ListItem>
          </List>

        </Center>

      </Flex>

    </PageLayout>
  );

}