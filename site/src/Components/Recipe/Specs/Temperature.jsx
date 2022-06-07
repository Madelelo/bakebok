import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { GiHeatHaze } from "react-icons/gi";
import { InfoBoxSpecs } from "../../Styling/InfoBox";
import StyledIcon from "../../Styling/StyledComponents";

const Temperature = (props) => {
  const { temperature } = props;

  if (!temperature) {
    return null;
  }

  return (
    <InfoBoxSpecs>
      <StyledIcon icon={GiHeatHaze} />
      <Flex justify="row">
        <Text>
          Tempratur: {temperature?.value} {temperature?.unit}
        </Text>
      </Flex>
    </InfoBoxSpecs>
  );
};

export default Temperature;
