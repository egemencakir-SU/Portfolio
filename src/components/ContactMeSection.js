import React from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const ContactMeSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "hireMe",
      comment: "",
    },
    onSubmit: (values) => {
      submit("https://api.example.com/contact", values)
        .then((response) => {
          if (response.type === "success") {
            onOpen("success", `Thanks for your submission ${values.firstName}, we will get back to you shortly!`);
            formik.resetForm();
          } else {
            onOpen("error", "Something went wrong, please try again later!");
          }
        });
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      type: Yup.string(),
      comment: Yup.string().min(25, "Must be at least 25 characters").required("Required"),
    }),
  });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
      textColor="black" 
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl id="firstName" isInvalid={formik.touched.firstName && formik.errors.firstName}>
                <FormLabel>Your Name</FormLabel>
                <Input {...formik.getFieldProps("firstName")} />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl id="email" isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel>Email address</FormLabel>
                <Input type="email" {...formik.getFieldProps("email")} />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl id="type">
                <FormLabel>Type of Enquiry</FormLabel>
                <Select {...formik.getFieldProps("type")}>
                  <option value="hireMe">Hire Me</option>
                  <option value="openSource">Open Source</option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl id="comment" isInvalid={formik.touched.comment && formik.errors.comment}>
                <FormLabel>Message</FormLabel>
                <Textarea {...formik.getFieldProps("comment")} />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button type="submit" isLoading={isLoading}>
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;