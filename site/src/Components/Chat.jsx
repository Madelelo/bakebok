import React from "react";
import { useState } from "react";
import { Flex, Container, Box, Text, InputLeftElement } from "@chakra-ui/react";
import { ChatIcon, AskerIcon } from "./Styling/StyledComponents";
import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";

const Chat = () => {
  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState([
    {
      user: "gpt",
      message: "Welcome to the BakingBot! Ask me anything.",
    },
  ]);

  function clearChat() {
    setChatLog([]);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let chatLogNew = [
      ...chatLog,
      {
        user: "me",
        message: `${input}
    `,
      },
    ];
    setInput("");
    setChatLog(chatLogNew);

    const messages = chatLogNew.map((message) => message.message).join("\n");

    const response = await fetch("http://localhost:3080/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: messages,
      }),
    });

    const data = await response.json();
    setChatLog([
      ...chatLog,
      {
        user: "gpt",
        message: `${data.message}
    `,
      },
    ]);
  }

  return (
    <Flex direction="column" justifyContent="center" alignItems="center">
      <Box w="50%">
        {chatLog.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
      </Box>

      <Box w="50%">
        <Flex
          direction="row"
          justifyContent="left"
          alignItems="center"
          bg="mteal"
          w="100%"
          p={4}
        >
          <form onSubmit={handleSubmit}>
            <Flex>
              <InputGroup>
                <InputLeftElement>
                  <AskerIcon color="lteal"> </AskerIcon>
                </InputLeftElement>

                <Input
                  size="lg"
                  variant="unstyled"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your question here?"
                  _placeholder={{ opacity: 0.4, color: "white", size: "sm" }}
                ></Input>
              </InputGroup>
            </Flex>
          </form>
        </Flex>
      </Box>
      <Text fontSize="xs" color="mteal" mt={10}>
        Powered by text-davinci-003 by OpenAI. Thank to @Markus-bit for
        inspiration and code.
      </Text>
    </Flex>
  );
};

const ChatMessage = ({ message }) => {
  const fromChatGPT = message.user === "gpt";

  return (
    <Box my={4}>
      <Flex
        direction="row"
        justifyContent={fromChatGPT ? "left" : "right"}
        alignItems="center"
        bg={fromChatGPT ? "dteal" : "mteal"}
        p={4}
      >
        {fromChatGPT ? <ChatIcon color="lteal" /> : <AskerIcon color="lteal" />}

        <Text align="left" color="white">
          {message.message}
        </Text>
      </Flex>
    </Box>
  );
};

export default Chat;
