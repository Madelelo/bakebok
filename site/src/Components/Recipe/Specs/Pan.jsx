import React from "react";
import { Text, Icon, Flex } from "@chakra-ui/react";
import { GiResize } from "react-icons/gi";
import { InfoBoxSpecs } from "../../Styling/InfoBox";
import StyledIcon from "../../Styling/StyledComponents";

const Pan = (props) => {
  const { pan } = props;

  if (!pan) {
    return null;
  }

  return (
    <InfoBoxSpecs>
      <StyledIcon icon={GiResize} />
      <Flex justify="row" align="center">
        Form:
        <Text>{pan.shape} </Text>
        <Text> Størrelse: </Text>
        <Text>{pan.size} </Text>
      </Flex>
    </InfoBoxSpecs>
  );
};

export default Pan;
