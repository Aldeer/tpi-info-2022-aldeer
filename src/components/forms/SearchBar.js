import { Fragment } from "react"


export const SearchBar = () => {
  return (
    <Fragment>
      <div className="d-flex justify-content-center">
        <input type="text" placeholder="buscar noticia" />
      </div>
    </Fragment>
  );
};