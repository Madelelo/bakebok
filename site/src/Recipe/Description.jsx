import React from "react";

const Description = (props) => {
  const { description } = props;
  console.log(description);
  return <div>{description}</div>;
};

export default Description;
