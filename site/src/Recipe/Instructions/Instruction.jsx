import React from "react";
import { Text } from "@chakra-ui/layout";
import sanityClient from "@sanity/client";
import { ChakraProvider } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useSanityContext } from "../../SanityContext";

const Instruction = (props) => {
  const { instructionKey } = props;
  const { client } = useSanityContext();
  const [instruction, setInstruction] = useState([]);

  const instructionQuery = `*[_key == "${instructionKey}"]`;

  useEffect(() => {
    client
      .fetch(instructionQuery)
      .then((instruction) => {
        console.log("instruction", instruction);
        setInstruction(instruction);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!instruction.length) {
    return null;
  }

  return <Text>{}</Text>;
};

export default Instruction;
