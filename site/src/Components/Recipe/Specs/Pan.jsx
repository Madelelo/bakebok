import React from "react";
import { Text, Flex } from "@chakra-ui/react";
import { GiResize } from "react-icons/gi";
import { InfoBoxSpecs } from "../../Styling/InfoBox";
import StyledIcon from "../../Styling/StyledComponents";

const Pan = (props) => {
  const { pan } = props;

  if (!pan) {
    return null;
  }

  const shapeLabels = {
    Round: "Rund",
    Square: "Firkantet",
    Rectangle: "Rektangulær",
    Loaf: "Brødform",
  };
  const shape = shapeLabels[pan.shape] || pan.shape;
  const size = pan.size_value ? `${pan.size_value} ${pan.size_unit || "cm"}` : null;

  return (
    <InfoBoxSpecs>
      <StyledIcon icon={GiResize} />
      <Flex justify="row" align="center" wrap="wrap">
        <Text><Text as="span" fontWeight="semibold">Form</Text><br />{shape}{size ? `, ${size}` : ""}</Text>
      </Flex>
    </InfoBoxSpecs>
  );
};

export default Pan;
