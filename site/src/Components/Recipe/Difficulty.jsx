import React from "react";
import { HStack } from "@chakra-ui/react";
import { InfoBoxSpecs } from "../Styling/InfoBox";
import { DifficultyIcon } from "../Styling/StyledComponents";

const Difficulty = (props) => {
  const { difficulty } = props;

  if (!difficulty) {
    return null;
  }

  return (
    <InfoBoxSpecs>
      <HStack spacing={1} role="img" aria-label={`${difficulty} av 3 cupcakes`}>
        {[1, 2, 3].map((level) => (
          <DifficultyIcon
            key={level}
            color={difficulty >= level ? "dpink" : "lpink"}
          />
        ))}
      </HStack>
    </InfoBoxSpecs>
  );
};

export default Difficulty;
