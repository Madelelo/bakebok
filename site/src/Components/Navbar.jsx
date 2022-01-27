import React from "react";
import { Box } from "@chakra-ui/layout";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal" w="100%" p={4} color="white">
      <Link to="/">Bakebok</Link>
    </Box>
  );
};

export default Navbar;
