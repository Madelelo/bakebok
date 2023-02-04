import React from "react";
import { Icon } from "@chakra-ui/react";
import { GiCupcake, GiChefToque, GiTalk } from "react-icons/gi";

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
      justify="space-around"
      color={color}
      w={[6, 8, 20]}
      h="8"
    />
  );
};

export const ChatIcon = (props) => {
  const { color } = props;

  return (
    <Icon
      as={GiChefToque}
      justify="space-around"
      color={color}
      w={[6, 8, 20]}
      h="6"
    />
  );
};

export const AskerIcon = (props) => {
  const { color } = props;

  return (
    <Icon
      as={GiTalk}
      justify="space-around"
      color={color}
      w={[6, 8, 20]}
      h="6"
    />
  );
};
