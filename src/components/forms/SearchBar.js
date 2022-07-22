import React, { useState } from "react";

const initialForm = { search: "" };

const SearchBar = ({ handleSearch }) => {
  const [form, setform] = useState(initialForm);

  const handleChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.search) {
      alert("Advertencia: Busqueda vacia");
      return;
    }

    if (form.search.trim().length > 2) {
      handleSearch(form);
      setform(initialForm);
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
          value={form.search}
        />
        <input type="submit" value="Buscar" />
      </form>
    </div>
  );
};

export default SearchBar;
