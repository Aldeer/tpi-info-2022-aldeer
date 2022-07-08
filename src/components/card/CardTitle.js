import { Fragment } from "react";


export const CardTitle = (props) => {
  const {title} = props;

  return (
    <Fragment>
      <div>
        <h5 className="card-text">{title}</h5>
      </div>
    </Fragment>
  );
};