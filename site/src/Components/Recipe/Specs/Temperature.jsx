import React from "react";
import { Grid, Text, Icon } from "@chakra-ui/react";
import { GiHeatHaze } from "react-icons/gi";
import { InfoBoxSpecs } from "../../Styling/InfoBox";

const Temperature = (props) => {
  const { temperature } = props;

  if (!temperature) {
    return null;
  }

  return (
    <InfoBoxSpecs>
      <Icon as={GiHeatHaze} color="dpink" />
      <Text>Tempratur: </Text>
      <Text>
        {temperature?.value} {temperature?.unit}
      </Text>
    </InfoBoxSpecs>
  );
};

export default Temperature;
