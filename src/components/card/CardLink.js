import { Fragment } from "react";


export const CardLink = (props) => {
  const {url} = props;

  return (
    <Fragment>
      <div>
        <a
          className="btn btn-primary"
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          ir a la pagina
        </a>
      </div>
    </Fragment>
  );
};