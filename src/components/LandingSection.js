import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import profileImage from "../images/Profil_V2.jpg";

const greeting = "Hello, I am Egemen Çakır!";
const bio1 = "A Software developer";
const bio2 = "specialized in FrontEnd ";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4}>
      <Avatar size="xl" src={profileImage} />
      <Heading as="h1" size="2xl">
        {greeting}
      </Heading>
      <Heading as="h2" size="lg">
        {bio1}
      </Heading>
      <Heading as="h2" size="lg">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
