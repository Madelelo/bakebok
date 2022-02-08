import React from "react";
import { Icon } from "@chakra-ui/react";

const StyledIcon = (props) => {
  const { icon } = props;
  return (
    <Icon as={icon} mr="10" justify="space-around" color="dpink" w="8" h="8" />
  );
};

export default StyledIcon;
