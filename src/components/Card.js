import React from "react";
import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      spacing={4}
      borderRadius="lg"
      boxShadow="lg"
      p={4}
      backgroundColor="white"
    >
      <Image src={imageSrc} alt={title} w="100%" h="auto" maxH="200px" />
      <Heading as="h2" size="lg">
        {title}
      </Heading>
      <Text>{description}</Text>
      <HStack spacing={2}>
        <Text>Learn More</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );
};

export default Card;
