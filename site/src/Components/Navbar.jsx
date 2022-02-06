import React from "react";
import { Flex, Icon, Text, Divider } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { GiCupcake } from "react-icons/gi";

const Navbar = () => {
  return (
    <Link to="/">
      <Flex
        w="100%"
        p={2}
        alignItems="center"
        color="white"
        justifyContent="center"
        borderBottom="2px solid #006D77"
      >
        <Icon as={GiCupcake} w={8} h={8} m={4} color="mteal" />
        <Text textStyle="h1" color="dteal">
          Bakeboka
        </Text>
      </Flex>{" "}
      <Divider
        orientation="horizontal"
        p={0.5}
        color="mpink"
        borderBottomWidth="2px"
      />
    </Link>
  );
};

export default Navbar;
