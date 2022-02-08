import React from "react";
import { Container } from "@chakra-ui/layout";

const Description = (props) => {
  const { description } = props;

  if (!description) {
    return null;
  }

  return <Container maxw="container.lg"> {description}</Container>;
};

export default Description;
