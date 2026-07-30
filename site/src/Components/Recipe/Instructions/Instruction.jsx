import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";

const Instruction = (props) => {
  const { instruction, number, isLast } = props;

  if (!instruction) {
    return null;
  }

  return (
    <Flex
      align="flex-start"
      gap={{ base: 3, md: 4 }}
      py={{ base: 4, md: 5 }}
      borderBottom={isLast ? "none" : "1px solid"}
      borderColor="lpink"
    >
      <Flex
        align="center"
        justify="center"
        flexShrink={0}
        width={{ base: 7, md: 8 }}
        height={{ base: 7, md: 8 }}
        border="2px solid"
        borderColor="mteal"
        bg="lteal"
        color="dteal"
        fontSize={{ base: "sm", md: "md" }}
        fontWeight="bold"
      >
        {number}
      </Flex>

      <Box flex="1" minWidth="0" maxW="65ch">
        {instruction.title && (
          <Text
            mb="1"
            color="dteal"
            fontSize={{ base: "18px", lg: "20px" }}
            fontWeight="semibold"
          >
            {instruction.title}
          </Text>
        )}
        <Text fontSize={{ base: "18px", lg: "20px" }} lineHeight="1.75">
          {instruction.text || instruction.name}
        </Text>

        {instruction.tip && (
          <Box mt="2">
            <Text fontSize="18px" lineHeight="1.7" fontStyle="italic">
              <Text as="span" color="dteal" fontWeight="bold">
                Tips: {" "}
              </Text>
              {instruction.tip}
            </Text>
          </Box>
        )}
      </Box>
    </Flex>
  );
};
export default Instruction;
