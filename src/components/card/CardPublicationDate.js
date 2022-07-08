import { DateTime } from "luxon";
import { Fragment } from "react";

export const CardPublicationDate = (props) =>{
  const {publishedAt} = props;
  const date = DateTime.fromISO(publishedAt).toFormat("'Publicado: 'D 'a las ' HH':'mm 'hs'")
  console.log(date);
  return (
    <Fragment>
      <div>
        <h5>{date}</h5>
      </div>
    </Fragment>
  );
};