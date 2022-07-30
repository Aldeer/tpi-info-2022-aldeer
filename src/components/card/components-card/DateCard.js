import React from "react";
import { DateTime } from "luxon";

const DateCard = ({ publishedAt }) => {
  const published = DateTime.fromISO(publishedAt).toFormat(
    "dd'-'LL'-'y 'a las' T 'hs'"
  );
  //console.log(published);
  return (
    <div>
      <h6>Publicado el: {published}</h6>
    </div>
  );
};

export default DateCard;
