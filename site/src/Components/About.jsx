import React from "react";
import { Flex, Spinner, Container } from "@chakra-ui/react";
import { useSanityContext } from "../SanityContext";
import { useState, useEffect } from "react";
import { PageH1, PageH2 } from "./Styling/PageBox";
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

  console.log(data[0].intro);
  return (
    <Container width="3xl">
      <Flex direction="column" justifyContent="center" alignItems="center">
        <PageH1>{data[0].title}</PageH1>
        <PageH2> {data[0].intro}</PageH2>
        <PageText> {data[0].body}</PageText>
      </Flex>
    </Container>
  );
};

export default About;
