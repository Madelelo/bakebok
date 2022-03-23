import React from "react";
import { Flex, Text, Divider } from "@chakra-ui/react";
import { Link } from "react-router-dom";

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
      <Link to="/about">
        <Text>Mer om bakeboka her</Text>
      </Link>
    </Flex>
  );
};

export default Footer;
