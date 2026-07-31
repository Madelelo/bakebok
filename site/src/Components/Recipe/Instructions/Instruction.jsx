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
      gap={3}
      py={{ base: 3, md: 3 }}
      borderBottom={isLast ? "none" : "1px solid"}
      borderColor="lpink"
    >
      <Flex
        align="flex-start"
        justify="center"
        flexShrink={0}
        width={7}
        height={7}
        border="2px solid"
        borderColor="mteal"
        bg="lteal"
        color="dteal"
        fontSize={{ base: "sm", md: "md" }}
        fontWeight="bold"
        lineHeight="1.5"
        pt="1px"
      >
        {number}
      </Flex>

      <Box flex="1" minWidth="0" maxW="65ch">
        {instruction.title && (
          <Text
            mb="1"
            color="dteal"
            fontSize="14px"
            fontWeight="semibold"
            lineHeight="1.5"
          >
            {instruction.title}
          </Text>
        )}
        <Text fontSize="14px" lineHeight="1.5">
          {instruction.text || instruction.name}
        </Text>

        {instruction.tip && (
          <Box mt="1.5">
            <Text fontSize="14px" lineHeight="1.5" fontStyle="italic">
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
