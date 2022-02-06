import React from "react";
import { Flex, Text, Icon } from "@chakra-ui/react";
import { GiSandsOfTime } from "react-icons/gi";
import { InfoBoxSpecs } from "../../Styling/InfoBox";

const Cooktime = (props) => {
  const { cooktime } = props;

  if (!cooktime) {
    return null;
  }

  return (
    <InfoBoxSpecs>
      <Icon as={GiSandsOfTime} color="dpink" />
      <Text> Tid i ovn: {cooktime} minutter</Text>
    </InfoBoxSpecs>
  );
};

export default Cooktime;
