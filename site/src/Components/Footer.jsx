import React from "react";
import { Flex, Text, Divider, Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex direction="column" align="center" p={10}>
      <Divider
        orientation="horizontal"
        p={0.5}
        color="mpink"
        borderBottomWidth="1px"
      />

      <Text textStyle="body_list" color="mteal" p={5}>
        av Madeleine Lorås, 2022
      </Text>
    </Flex>
  );
};

export default Footer;
