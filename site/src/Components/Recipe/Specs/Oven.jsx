import React from "react";
import { Grid, GridItem, Icon } from "@chakra-ui/react";
import { GiAbstract055 } from "react-icons/gi";
const Oven = (props) => {
  const { oven } = props;

  if (!oven) {
    return null;
  }

  return (
    <Grid templateColumns="1fr 50%" gap={2}>
      <GridItem align="right">
        <Icon as={GiAbstract055} />
        Type ovn:{" "}
      </GridItem>
      <GridItem>{oven} </GridItem>
    </Grid>
  );
};

export default Oven;
