import React from "react";
import { Icon } from "@chakra-ui/react";
import { GiCupcake } from "react-icons/gi";

const StyledIcon = (props) => {
  const { icon } = props;
  return (
    <Icon as={icon} mr="10" justify="space-around" color="dpink" w="8" h="8" />
  );
};
export default StyledIcon;

export const DifficultyIcon = (props) => {
  const { color } = props;

  return (
    <Icon
      as={GiCupcake}
      mr="10"
      justify="space-around"
      color={color}
      w="8"
      h="8"
    />
  );
};
