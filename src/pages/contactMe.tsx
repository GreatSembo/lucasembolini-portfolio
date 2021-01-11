import React,{useState} from "react"
import { useForm } from "react-hook-form";
import PageLayout from "../components/layout/pageLayout"
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Box,
  Textarea, Center, Heading
} from "@chakra-ui/react";
import Mountain from "../assets/beyond.png"
import MyButton from "../components/myButton"
export default function ContactMe() {
  const { handleSubmit, errors, register, formState, reset } = useForm();
  const [contactSent,setContactSent]=useState(false)
  function onSubmit(ev: any) {
    const formData = new FormData();
    formData.append("email", ev._replyto);   //append the values with key, value pair
    formData.append('Message', ev._replyto);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://formspree.io/f/xzbjbprb");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        reset();
        setContactSent(true)
        // this.setState({ status: "SUCCESS" });
      } else {
        alert("There was an error, try again later!")
        // this.setState({ status: "ERROR" });
      }
    };
    xhr.send(formData);



  }

  return (
    <PageLayout background={Mountain}>
      {!contactSent ?
      <Box margin="auto auto" width="50%" display="block">
      <Heading display="block" color="white" margin="10px auto">Contact Form</Heading>
      
      <Center margin="auto auto" width="100%">
        
        <form
          action="https://formspree.io/f/xzbjbprb"
          method="POST"
          className="formStyle"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormControl isInvalid={errors._replyto}>
            <FormLabel htmlFor="_replyto" color="white" fontSize="xl">Your Email</FormLabel>
            <Input
              color="white"
              name="_replyto"
              placeholder="Email"
              ref={register({ required: true, pattern: /^\S+@\S+\.\S+$/ })}
            />

            <FormErrorMessage>
              {errors._replyto && "Enter a valid Email format"}
            </FormErrorMessage>
          </FormControl>
          <FormControl mt="20px" isInvalid={errors.message}>
            <FormLabel color="white" htmlFor="message" fontSize="xl">Your Message</FormLabel>
            <Textarea
              name="message"
              placeholder="Your Message"
              color="white"
              ref={register({ required: true })}
            />
            <FormErrorMessage>
              {errors.message && "Write Something!"}
            </FormErrorMessage>
          </FormControl>
          <MyButton text="Submit" type="submit" />

        </form>
      </Center>
      </Box>:
      <Center margin="auto auto">
        <Heading display="block" color="white" margin="auto auto">Thank you! I'll answer ASAP!</Heading>
      </Center>}
    </PageLayout>
  );

  //     return(
  //        <>
  //       <form
  //   action="https://formspree.io/f/xzbjbprb"
  //   method="POST"
  // >
  //   <label>
  //     Your email:
  //     <input type="text" name="_replyto"/>
  //   </label>
  //   <label>
  //     Your message:
  //     <textarea name="message"></textarea>
  //   </label>


  //   <button type="submit">Send</button>
  // </form>
  //        </>
  //     )
}