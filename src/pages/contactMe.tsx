import React from "react"
import { useForm } from "react-hook-form";
import PageLayout from "../components/layout/pageLayout"
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Textarea
} from "@chakra-ui/react";

export default function ContactMe() {
  const { handleSubmit, errors, register, formState } = useForm();

  function validateName(value:any) {
    if (!value) {
      return "Name is required";
    } else if (value !== "Naruto") {
      return "Jeez! You're not a fan 😱";
    } else return true;
  }

  function onSubmit(values:any) {
    return new Promise(resolve => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve(true);
      }, 3000);
    });
  }

  return (
    <PageLayout particle>
    <form
      action="https://formspree.io/f/xzbjbprb"
        method="POST"
>
      <FormControl isInvalid={errors.name}>
        <FormLabel htmlFor="name">Email</FormLabel>
        <Input
          name="_replyto"
          placeholder="Email"
          ref={register({required: true, pattern: /^\S+@\S+$/i})}
        />
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.name}>
        <FormLabel htmlFor="name">Email</FormLabel>
        <Textarea
          name="message"
          placeholder="Your Message"
          ref={register({ required:true })}
        />
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme="teal" isLoading={formState.isSubmitting} type="submit">
        Submit
      </Button>
    </form>
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