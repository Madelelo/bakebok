import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { GiHeatHaze } from "react-icons/gi";
import { InfoBoxSpecs } from "../../Styling/InfoBox";
import StyledIcon from "../../Styling/StyledComponents";

const Temperature = (props) => {
  const { temperature, idiot } = props;

  if (!temperature) {
    return null;
  }

  const convertedTemperature = convertTemperature(temperature, idiot);

  return (
    <InfoBoxSpecs>
      <StyledIcon icon={GiHeatHaze} />
      <Flex justify="row">
        <Text><Text as="span" fontWeight="semibold">Temperatur</Text><br />{convertedTemperature.value} °{convertedTemperature.unit}</Text>
      </Flex>
    </InfoBoxSpecs>
  );
};

export default Temperature;

export const convertTemperature = (temperature, idiot) => {
  const { value, unit } = temperature;

  if (value == null) {
    return temperature;
  }

  if (unit === "C" && idiot) {
    const fahrenheit = (value * 9) / 5 + 32;
    return { ...temperature, value: Math.round(fahrenheit / 5) * 5, unit: "F" };
  }

  if (unit === "F" && !idiot) {
    const celsius = ((value - 32) * 5) / 9;
    return { ...temperature, value: Math.round(celsius / 5) * 5, unit: "C" };
  }

  return temperature;
};
