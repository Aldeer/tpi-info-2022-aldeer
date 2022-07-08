import { Fragment } from "react";


export const Loading = () => {
  return (
    <Fragment>
      <div className="d-flex justify-content-center text-danger" role="status">
        <h3>Cargando noticias...</h3>
        <div className="spinner-border"></div>
      </div>
    </Fragment>
  );
};