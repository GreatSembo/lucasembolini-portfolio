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

export default function About() {

  return (
    <PageLayout background={Mountain}>
      <Flex color="white" flexDirection={{ sm: "column", md: "row" }} fontSize={{sm:"sm",lg:"lg"}}>
        <Center w={{sm:"100%",lg:"35%"}} mt={{sm:"80px",lg:"0px"}} flexDirection="column">
        <Heading as="h1" size="xl" margin="0px auto 80px 20px" alignSelf="flex-start" >About Me</Heading>
          <Image src={ProfilePicture} alt="Luca Sembolini" maxWidth="50%" />
          <Text padding="20px" textAlign="center">I'm an Italian guy that loves challenges and I'm always looking for a new goal to accomplish. 
          Having an healthy lifestyle is my number one priority. Focused Developer on the working our and fitness enthusiast on every other of the day</Text>
        </Center>
        <Center w={{sm:"100%",lg:"65%"}} flexDirection="column" padding="40px">
          <Heading as="h2" size="lg" alignSelf="flex-start">Education</Heading>
          <List spacing={3} alignSelf="flex-start" padding="10px">
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

          <Heading as="h2" size="lg" alignSelf="flex-start">Work Experience</Heading>
          <List spacing={3} alignSelf="flex-start" padding="10px">
            <ListItem>
              <ListIcon as={AiOutlineFundProjectionScreen} color="white" />
              <b className="greenLizardColor">Full Stack Developer</b> - Reply S.p.A. | Feb 2019 - Now
              <Text ml="1.5em">
                Development of an e-commerce websites using React
                Deploy and design of AWS serverless architectures using the Serverless framework and AWS console. 
                Scalable backend using Java and Node.js.
              </Text>
            </ListItem>
            <ListItem>
              <ListIcon as={AiOutlineFundProjectionScreen} color="white" />
              <b className="greenLizardColor">Junior .NET Developer</b> - Nextre Engineering | Mar 2018 - Jan 2019
              <Text ml="1.5em">
                Development of web services and MVC application using C#.
                Development of a custom IoT platform using ThingWorx with Javascript.
              </Text>
            </ListItem>
            <ListItem>
              <ListIcon as={AiOutlineFundProjectionScreen} color="white" />
              <b className="greenLizardColor">Junior Java Developer and Data Scientist</b> - Sharper Analytics srl | Oct 2017 - Feb 2018
              <Text ml="1.5em">
                Development and maintenance of java applications.
                Data Mining and application of machine learning algorithms for a recommendation system.
              </Text>
            </ListItem>
            <ListItem>
              <ListIcon as={AiOutlineFundProjectionScreen} color="white" />
              <b className="greenLizardColor">Junior .NET Developer</b> - Be Solution S.p.A | Feb 2017 - Sep 2018
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