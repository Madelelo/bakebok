import React from "react";
import { Flex, Text, Icon } from "@chakra-ui/react";
import { GiAbstract055 } from "react-icons/gi";
import { InfoBoxSpecs } from "../../Styling/InfoBox";
import StyledIcon from "../../Styling/StyledComponents";

const Oven = (props) => {
  const { oven } = props;

  if (!oven) {
    return null;
  }

  return (
    <InfoBoxSpecs>
      <StyledIcon icon={GiAbstract055} />
      <Text>Type ovn: {oven} </Text>
    </InfoBoxSpecs>
  );
};

export default Oven;
