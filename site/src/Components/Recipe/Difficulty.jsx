import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import { InfoBoxSpecs } from "../Styling/InfoBox";
import { DifficultyIcon } from "../Styling/StyledComponents";

const Difficulty = (props) => {
  const { difficulty } = props;

  if (!difficulty) {
    return null;
  }

  return (
    <InfoBoxSpecs>
      <Flex justifyContent="center" flexFlow="column wrap" flexShrink="0">
        <Box>
          <DifficultyIcon color={difficulty > 0 ? "dpink" : "lpink"} />
          <DifficultyIcon color={difficulty > 1 ? "dpink" : "lpink"} />
          <DifficultyIcon color={difficulty > 2 ? "dpink" : "lpink"} />
        </Box>
      </Flex>
    </InfoBoxSpecs>
  );
};

export default Difficulty;
