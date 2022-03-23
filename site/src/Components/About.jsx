import React from "react";
import { Flex, Spinner, Text } from "@chakra-ui/react";
import { useSanityContext } from "../SanityContext";
import { useState, useEffect } from "react";

const About = () => {
  const { client } = useSanityContext();
  const [data, setData] = useState([]);

  const pageQuery = `
*[slug == "om-bakebok" ]{
  title, intro, body, image}
`;

  useEffect(() => {
    if (client.fetch) {
      client
        .fetch(pageQuery)
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [client, setData, pageQuery]);

  if (!data.length) {
    return <Spinner m="10" p="4" color="teal" />;
  }

  return (
    <Flex>
      <h1>{data[0].title}</h1>
      <Text> {data[0].intro}</Text>
      <Text> {data[0].body}</Text>
    </Flex>
  );
};

export default About;
