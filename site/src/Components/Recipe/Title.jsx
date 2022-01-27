import React from "react";
import { Heading } from "@chakra-ui/layout";

const Title = (props) => {
  const { title } = props;

  return <Heading> {title}</Heading>;
};

export default Title;
