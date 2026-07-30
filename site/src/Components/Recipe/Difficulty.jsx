import React from "react";
import { Box, HStack, Text } from "@chakra-ui/react";
import { InfoBoxSpecs } from "../Styling/InfoBox";
import { DifficultyIcon } from "../Styling/StyledComponents";

const Difficulty = (props) => {
  const { difficulty } = props;

  if (!difficulty) {
    return null;
  }

  const labels = { 1: "Lav", 2: "Middels", 3: "Høy" };
  const label = labels[difficulty] || difficulty;

  return (
    <InfoBoxSpecs>
      <Box>
        <Text fontWeight="semibold">Nivå</Text>
        <HStack spacing={1} mt={1} role="img" aria-label={`${label}: ${difficulty} av 3 cupcakes`}>
          {[1, 2, 3].map((level) => (
            <DifficultyIcon
              key={level}
              color={difficulty >= level ? "dpink" : "lpink"}
            />
          ))}
        </HStack>
        <Text mt={1}>{label}</Text>
      </Box>
    </InfoBoxSpecs>
  );
};

export default Difficulty;
