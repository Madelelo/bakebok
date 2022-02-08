import React from "react";
import { Text } from "@chakra-ui/react";
import { GiSandsOfTime } from "react-icons/gi";
import { InfoBoxSpecs } from "../../Styling/InfoBox";
import StyledIcon from "../../Styling/StyledComponents";

const Cooktime = (props) => {
  const { cooktime } = props;

  if (!cooktime) {
    return null;
  }

  return (
    <InfoBoxSpecs>
      <StyledIcon icon={GiSandsOfTime} />
      <Text> Tid i ovn: {cooktime} minutter</Text>
    </InfoBoxSpecs>
  );
};

export default Cooktime;
