import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const PageText = (props) => {
  const { children } = props;

  return (
    <Text fontSize="14px" paddingBottom="4">
      {children}
    </Text>
  );
};

export default PageText;

export const PageH1 = (props) => {
  const { children } = props;

  return (
    <Text fontSize="20px" fontWeight="bold" paddingTop="10">
      {children}
    </Text>
  );
};

export const PageH2 = (props) => {
  const { children } = props;

  return <Text fontSize="15px">{children}</Text>;
};
