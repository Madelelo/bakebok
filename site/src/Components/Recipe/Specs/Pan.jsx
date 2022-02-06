import React from "react";
import { Text, Icon } from "@chakra-ui/react";
import { GiResize } from "react-icons/gi";
import { InfoBoxSpecs } from "../../Styling/InfoBox";
const Pan = (props) => {
  const { pan } = props;

  if (!pan) {
    return null;
  }

  return (
    <InfoBoxSpecs>
      <Icon as={GiResize} color="dpink" /> Form:
      <Text>{pan.shape} </Text>
      <Text> Størrelse: </Text>
      <Text>{pan.size} </Text>
    </InfoBoxSpecs>
  );
};

export default Pan;
