import React from "react";
import { Text } from "@chakra-ui/react";
import { InfoBoxSpecs } from "../Styling/InfoBox";
import { GiCupcake } from "react-icons/gi";
import StyledIcon from "../Styling/StyledComponents";

const Difficulty = (props) => {
  const { difficulty } = props;

  if (!difficulty) {
    return null;
  }

  const labels = { 1: "Enkel", 2: "Middels", 3: "Krevende" };

  return (
    <InfoBoxSpecs>
      <StyledIcon icon={GiCupcake} />
      <Text><Text as="span" fontWeight="semibold">Nivå</Text><br />{labels[difficulty] || difficulty}</Text>
    </InfoBoxSpecs>
  );
};

export default Difficulty;
