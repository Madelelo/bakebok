import React from "react";
import { Heading } from "@chakra-ui/layout";

const Title = (props) => {
  const { title } = props;

  return <Heading p="5"> {title}</Heading>;
};

export default Title;
