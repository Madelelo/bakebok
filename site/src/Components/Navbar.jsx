import React from "react";
import { Box, Flex, Icon, Text, Divider } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { GiCupcake } from "react-icons/gi";

const Navbar = () => {
  return (
    <Box as="header" position="sticky" top="0" zIndex="sticky" bg="white">
      <Link to="/">
        <Flex
          w="100%"
          p={2}
          alignItems="center"
          color="white"
          justifyContent="center"
          borderBottom="2px solid #006D77"
        >
          <Icon as={GiCupcake} w={8} h={8} m={{ base: 2, md: 4 }} color="mteal" />
          <Text textStyle="h1_nav" color="dteal">
            Bakeboka
          </Text>
        </Flex>
        <Divider
          orientation="horizontal"
          borderColor="mpink"
          color="mpink"
          borderBottomWidth="2px"
        />
      </Link>
    </Box>
  );
};

export default Navbar;
