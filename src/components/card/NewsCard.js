import { Fragment } from "react";

//components
import { CardImage } from "./CardImage";
import { CardTitle } from "./CardTitle";
import { CardDescription } from "./CardDescription";
import { CardPublicationDate } from "./CardPublicationDate";
import { CardLink } from "./CardLink";

export const NewsCard = (props) => {
  const {title, description, urlImg, url, publishedAt} = props;
  
  return (
    <Fragment>
      <div className="row mx-5 my-2 bg-info rounded">
        <div className="col-4 p-0">
          <CardImage urlImg={urlImg}/>
        </div>
        <div className="col-8 d-flex ">
          <div className="row">
            <div className="col-12">
              <CardTitle title={title}/>
            </div>
            <div className="col-12">
              <CardDescription description={description}/>
            </div>
            <div className="col-12">
              <CardLink url={url}/>
            </div>
            <div className="col-12 text-end">
              <CardPublicationDate publishedAt={publishedAt}/>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};