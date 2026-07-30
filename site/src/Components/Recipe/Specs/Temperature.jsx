import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { GiHeatHaze } from "react-icons/gi";
import { InfoBoxSpecs } from "../../Styling/InfoBox";
import StyledIcon from "../../Styling/StyledComponents";
import { convertTemperature } from "./temperatureConversion.mjs";

const Temperature = (props) => {
  const { temperature, idiot } = props;
  const convertedTemperature = convertTemperature(
    temperature,
    idiot ? "F" : "C"
  );

  if (!convertedTemperature) {
    return null;
  }

  return (
    <InfoBoxSpecs>
      <StyledIcon icon={GiHeatHaze} />
      <Flex justify="row">
        <Text>
          <Text as="span" fontWeight="semibold">Temperatur</Text>
          <br />
          {convertedTemperature.value} °{convertedTemperature.unit}
        </Text>
      </Flex>
    </InfoBoxSpecs>
  );
};

export default Temperature;
