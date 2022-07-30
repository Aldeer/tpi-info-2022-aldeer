import React from "react";

const DescriptionCard = ({ description }) => {
  let arrayDescription = description.split(" ");
  let shortDescription = "";

  for (let i = 0; i < 25; i++) {
    shortDescription += arrayDescription[i] + " ";
  }

  return (
    <div>
      <h4>{shortDescription}...</h4>
    </div>
  );
};

export default DescriptionCard;
