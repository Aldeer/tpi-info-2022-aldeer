import React from "react";
import { useState } from "react";

const Pagination = ({ setTotal, total, setPage, page }) => {
  const nextPage = () => {
    setPage(page + 1);
  };

  const previousPage = () => {
    setPage(page - 1);
  };

  return (
    <div className="container d-flex justify-content-center my-4">
      {page > 1 ? (
        <button onClick={previousPage} className="mx-2">
          Anterior
        </button>
      ) : (
        ""
      )}
      {page < total ? (
        <button onClick={nextPage} className="mx-2">
          Siguiente
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Pagination;
