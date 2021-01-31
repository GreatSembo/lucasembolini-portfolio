import React, { useState } from "react"
import PageLayout from "../components/layout/pageLayout"
import {
  Flex,
  Box,
  Text, Center, Heading,
} from "@chakra-ui/react";
import Mountain from "../assets/beyond_back.jpg"
import SkillsChart from "../components/skillsChart";

export default function Skills() {

  return (
    <PageLayout background={Mountain}>
      <Flex color="white" flexDirection={{ sm: "column", md: "row" }} mt={{ sm: "80px", lg: "0px" }} fontSize={{ sm: "sm", lg: "lg" }}>
        <Center w={{ sm: "100%", lg: "40%" }} mt={{ sm: "40px", lg: "0px" }} flexDirection="column">
          <Heading as="h1" size="2xl" margin="0px auto 0px 40px" alignSelf="flex-start" >Skills</Heading>
          <Text padding="40px" fontSize="2xl" textAlign="left">
            My competences range from frontend and backend, I'm working in the IT sector since 2016 where I started using Java and C# which I improved during the years.
            Right now I'm using Javascript for every task, on the fronend for React and on the backend side for Nodejs. I'm learning Typescript to improve the quality of my code.
            I use AWS for all the software architecture and because I really believe that know how a cloud service work it's essential for every project right now, I choosed to learn more about AWS to be able to use all the most usefull services for my projects.
            </Text>
        </Center>
        <Center w={{ sm: "100%", lg: "60%" }} mt={{ sm: "80px", lg: "0px" }} mb={{ sm: "40px", lg: "0px" }} flexDirection="column">
          <SkillsChart />
        </Center>
      </Flex>

    </PageLayout>
  );

}