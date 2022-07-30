import React from "react";

const ImageCard = ({ urlToImage }) => {
  return (
    <div className="box-image">
      <img className="image-nocite" src={urlToImage} alt="..." />
    </div>
  );
};

export default ImageCard;
