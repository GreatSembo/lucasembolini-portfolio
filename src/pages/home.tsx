import React, { useEffect, useState } from "react";
import { Box, Button,  Heading, SlideFade} from "@chakra-ui/react"
import { useLocation } from "wouter"
import PageLayout from "../components/layout/pageLayout"
import MyButton from "../components/myButton"
import Mountain from "../assets/beyond_back.jpg"
export default function Home() {
    const [fadeOn, setFadeOn] = useState(false)
    const [location, setLocation] = useLocation();
    useEffect(() => {
            // array with texts to type in typewriter
            var dataText = [`Hey,<br/> I'm Luca Sembolini <br/> a Full Stack Developer `];

            // type one text in the typwriter
            // keeps calling itself until the text is finished
            function typeWriter(text: string, i: number, fnCallback: any) {
                // chekc if text isn't finished yet
                if (i < (text.length)) {
                    // add next character to h1
                    let h1 = document.getElementById("presentation")
                    if (h1 && text[i] != "<") h1.innerHTML = text.substring(0, i + 1) + '<span class="typewriter" aria-hidden="true"></span>';

                    // wait for a while and call this function again for next character
                    setTimeout(function () {
                        typeWriter(text, i + 1, fnCallback)
                    }, 50);
                }
                // text finished, call callback if there is a callback function
                else if (typeof fnCallback == 'function') {
                    // call callback after timeout
                    setTimeout(fnCallback, 400);
                }
            }
            // start a typewriter animation for a text in the dataText array
            function StartTextAnimation(i: number) {
                if (typeof dataText[i] == 'undefined') {
                    setTimeout(function () {
                        StartTextAnimation(0);
                    }, 20000);
                } else if (i < dataText[i].length) {
                    // text exists! start typewriter animation
                    typeWriter(dataText[i], 0, function () {
                        if (i == dataText.length - 1) {
                            setFadeOn(true)
                        }
                        // after callback (and whole text has been animated), start next text
                        StartTextAnimation(i + 1);
                    });
                }
            }
            // start the text animation
            StartTextAnimation(0);
        
    }, [])
    return (
        <PageLayout background={Mountain}>
            {/* <Center bg="tomato" h="100px" color="white" justifyContent="left">
            <h1></h1> 
            </Center> */}

            <Box display="block" fontSize="20" bgColor="transparent" color="white" margin={{sm:"auto",md:"auto auto auto 100px"}}>
                <Heading as="h1" id="presentation" size="3xl" mt={{sm:"150px",md:"auto"}}>
                    Hey,<br /> I'm Luca Sembolini <br /> a Full Stack Developer
                </Heading>
                <SlideFade in={fadeOn} offsetY="30px">
                    <Box margin="20px auto auto auto" >
                        <Heading as="h2" size="lg" textAlign="center" color="gray.200" fontWeight="100">React Developer - AWS Expert - Fitness Enthusiast</Heading>
                        {/* <Button onClick={() => setLocation('/contact')} margin="50px auto auto auto"
                            leftIcon={<AiOutlineMail />}
                            textAlign="center"
                            color={"electric_lime"}
                            _hover={{ bg: "forest_green_traditional" }}
                            variant="outline"
                            borderColor="forest_green_traditional"
                            transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                            border="2px"
                            display="flex"
                            _focus={{
                                boxShadow:
                                    "0 0 1px 2px forest_green_traditional, 0 1px 1px forest_green_traditional",
                            }}
                        >Contact Me</Button> */}
                        <MyButton onClick={()=>setLocation('/contact')} text={"Contact Me"}/>
                    </Box>
                </SlideFade>
            </Box>

            {/* <Box w="100%" h="100%" bgColor="transparent" className="line-1 anim-typewriter" color="white">

              
        </Box> */}
        </PageLayout>
    )
}