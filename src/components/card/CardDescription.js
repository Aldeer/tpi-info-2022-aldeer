import { Fragment } from "react";


export const CardDescription = (props) => {
  const {description} = props;

  return (
    <Fragment>
      <div>
        <h6 className="card-text">{description}</h6>
      </div>
    </Fragment>
  );
};