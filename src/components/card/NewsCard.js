import React from "react";
import DescriptionCard from "./components-card/DescriptionCard";
import ImageCard from "./components-card/ImageCard";
import LinkCard from "./components-card/LinkCard";
import TitleCard from "./components-card/TitleCard";
import DateCard from "./components-card/DateCard";

const NewsCard = () => {
  return (
    <div>
      <h2>Tarjeta de noticia</h2>
      <TitleCard />
      <ImageCard />
      <DescriptionCard />
      <LinkCard />
      <DateCard />
    </div>
  );
};

export default NewsCard;
