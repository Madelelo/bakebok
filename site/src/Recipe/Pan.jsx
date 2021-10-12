import React from "react";

const Pan = (props) => {
  const { pan } = props;
  return (
    <p>
      {pan.shape} {pan.size_value} {pan.size_unit}
    </p>
  );
};

export default Pan;
