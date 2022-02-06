import React from "react";
import { Flex, Text, Icon } from "@chakra-ui/react";
import { GiAbstract055 } from "react-icons/gi";
import { InfoBoxSpecs } from "../../Styling/InfoBox";
const Oven = (props) => {
  const { oven } = props;

  if (!oven) {
    return null;
  }

  return (
    <InfoBoxSpecs>
      <Icon as={GiAbstract055} color="dpink" />
      <Text>Type ovn: {oven} </Text>
    </InfoBoxSpecs>
  );
};

export default Oven;
