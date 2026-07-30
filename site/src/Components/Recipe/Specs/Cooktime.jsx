import React from "react";
import { Text, Box } from "@chakra-ui/react";
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
      <Box>
        <Text><Text as="span" fontWeight="semibold">Tid</Text><br />{cooktime} min</Text>
      </Box>
    </InfoBoxSpecs>
  );
};

export default Cooktime;
