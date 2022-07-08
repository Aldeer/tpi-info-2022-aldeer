import { Fragment } from "react";
import { NewsCard } from "./NewsCard";


export const GroupNewsCards = (props) => {
  const {data} = props;
  
  return (
    <Fragment>
      <div>
        {data.map((article, index) => {
          return (
            <NewsCard
              key={index}
              title={article.title}
              description={article.description}
              urlImg={article.urlToImage}
              url={article.url}
              publishedAt={article.publishedAt} 
            />
          )
        })} 
      </div>
    </Fragment>
  );
};