import React from "react";
import DescriptionCard from "./components-card/DescriptionCard";
import ImageCard from "./components-card/ImageCard";
import LinkCard from "./components-card/LinkCard";
import TitleCard from "./components-card/TitleCard";
import DateCard from "./components-card/DateCard";

const NewsCard = ({ el }) => {
  return (
    <div>
      <h2>Tarjeta de noticia</h2>
      <TitleCard title={el.title} />
      <ImageCard urlToImage={el.urlToImage} />
      <DescriptionCard description={el.description} />
      <LinkCard url={el.url} />
      <DateCard publishedAt={el.publishedAt} />
    </div>
  );
};

export default NewsCard;
