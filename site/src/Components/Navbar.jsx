import React from "react";
import { Text } from "@chakra-ui/layout";
import { Flex, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { GiCupcake } from "react-icons/gi";

const Navbar = () => {
  return (
    <Flex bg="brand.100" w="100%" p={4} color="white" p="4">
      <Link to="/">
        <Icon as={GiCupcake} m={2} />
        Bakeboka
      </Link>
    </Flex>
  );
};

export default Navbar;
