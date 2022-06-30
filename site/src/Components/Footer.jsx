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
      <Flex direction="row" align="center" p={10}>
        <Link to="/">
          <Text
            textAlign="center"
            textStyle="body_list"
            fontWeight="bold"
            color="mteal"
            p={5}
          >
            Tilbake til bakebok her
          </Text>
        </Link>

        <Text textAlign="center" textStyle="body_list" color="mteal" p={5}>
          av Madeleine Lorås, 2022
        </Text>

        <Link to="/about">
          <Text
            textAlign="center"
            textStyle="body_list"
            fontWeight="bold"
            color="mteal"
            p={5}
          >
            Mer om bakeboka her
          </Text>
        </Link>
        <a href="https://bakebok.sanity.studio/desk">
          <Text
            textAlign="center"
            textStyle="body_list"
            fontWeight="bold"
            color="mteal"
            p={5}
          >
            Admin
          </Text>
        </a>
      </Flex>
    </Flex>
  );
};

export default Footer;
