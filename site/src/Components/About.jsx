import React from "react";
import { Flex, Spinner, Text, Container, Grid } from "@chakra-ui/react";
import { useSanityContext } from "../SanityContext";
import { useState, useEffect } from "react";
import { PageH1 } from "./Styling/PageBox";
import PageText from "./Styling/PageBox";

const About = () => {
  const { client } = useSanityContext();
  const [data, setData] = useState([]);

  const pageQuery = `
  *[ _type == "page" ]{
    title, intro, body, image,
  }
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
    <Flex direction="column" justifyContent="center" alignItems="center">
      <PageH1>{data[0].title}</PageH1>
      <PageText> {data[0].intro}</PageText>
      <PageText> {data[0].body}</PageText>
    </Flex>
  );
};

export default About;
