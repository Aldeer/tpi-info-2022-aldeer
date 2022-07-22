import React, { useState, useEffect } from "react";
import NewsCard from "../components/card/NewsCard";
import SearchBar from "../components/forms/SearchBar";
import { useFetchApi } from "../hooks/useFetchApi";

const Home = () => {
  const [search, setSearch] = useState(null);
  const { data, loading, error } = useFetchApi("bitcoin", 1);
  const handleSearch = (data) => {
    setSearch(data);
  };
  useEffect(() => {
    console.log(search);
  }, [search]);
  return (
    <div>
      <h2>Home</h2>
      <SearchBar handleSearch={handleSearch} />
      <hr />
      <NewsCard />
    </div>
  );
};

export default Home;
