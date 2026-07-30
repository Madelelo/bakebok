import React from "react";
import { Icon } from "@chakra-ui/react";
import { GiCupcake } from "react-icons/gi";

const StyledIcon = (props) => {
  const { icon } = props;
  return (
    <Icon as={icon} mr={{ base: 2, md: 3 }} flexShrink="0" color="dpink" w="7" h="7" />
  );
};
export default StyledIcon;

export const DifficultyIcon = (props) => {
  const { color } = props;

  return (
    <Icon
      as={GiCupcake}
      aria-hidden="true"
      color={color}
      w={{ base: 5, md: 6 }}
      h={{ base: 5, md: 6 }}
    />
  );
};
