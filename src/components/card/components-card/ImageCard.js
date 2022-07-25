import React from "react";

const ImageCard = ({ urlToImage }) => {
  return (
    <div>
      <img src={urlToImage} alt="..." />
    </div>
  );
};

export default ImageCard;
