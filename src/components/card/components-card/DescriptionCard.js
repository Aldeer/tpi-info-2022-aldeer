import React from "react";

const DescriptionCard = ({ description }) => {
  let arrayDescription = description.split(" ");
  let shortDescription = "";

  for (let i = 0; i < 25; i++) {
    shortDescription += arrayDescription[i] + " ";
  }

  console.log(shortDescription);

  return (
    <div>
      <h5>{shortDescription}...</h5>
    </div>
  );
};

export default DescriptionCard;
