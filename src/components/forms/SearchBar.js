import React, { useState } from "react";

const SearchBar = ({ handleSearch }) => {
  let initialSearch = "";
  const [form, setform] = useState(initialSearch);
  //console.log(form);
  const handleChange = (e) => {
    setform(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form) {
      alert("Advertencia: Busqueda vacia");
      return;
    }

    if (form.trim().length > 2) {
      handleSearch(form);
      setform(initialSearch);
    } else {
      alert("Advertencia: Ingreso menos de 3 caracteres");
      return;
    }
  };
  return (
    <div>
      <h2>Buscador</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Buscar noticia"
          onChange={handleChange}
          value={form}
        />
        {form.length >= 3 && <input type="submit" value="Buscar" />}
      </form>
    </div>
  );
};

export default SearchBar;
