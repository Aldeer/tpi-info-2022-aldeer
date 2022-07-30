import React from "react";
import DescriptionCard from "./components-card/DescriptionCard";
import ImageCard from "./components-card/ImageCard";
import TitleCard from "./components-card/TitleCard";
import DateCard from "./components-card/DateCard";

const NewsCard = ({ el }) => {
  return (
    <div className="box">
      <a
        className="link-notice"
        href={el.url}
        target="_blank"
        rel="noreferrer noopener"
      >
        <div className="grid-1-2">
          <div className="text-notice">
            <TitleCard title={el.title} />
            <DescriptionCard description={el.description} />
            <DateCard publishedAt={el.publishedAt} />
          </div>
          <div>
            <ImageCard urlToImage={el.urlToImage} />
          </div>
        </div>
      </a>
    </div>
  );
};

export default NewsCard;
