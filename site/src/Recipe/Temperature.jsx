import React from "react";

const Temperature = (props) => {
  const { temperature } = props;
  return (
    <p>
      {temperature.value} {temperature.unit}
    </p>
  );
};

export default Temperature;
