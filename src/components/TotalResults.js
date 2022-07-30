import React from "react";

const TotalResults = ({ totalResults }) => {
  return (
    <div className="results">
      <h6>Está viendo 10 noticias de {totalResults} resultados</h6>
    </div>
  );
};

export default TotalResults;
