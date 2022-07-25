import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import NewsCard from "../components/card/NewsCard";
import SearchBar from "../components/forms/SearchBar";
import { useFetchApi } from "../hooks/useFetchApi";
import NoResults from "../components/NoResults";

const Home = () => {
  const [search, setSearch] = useState(null);
  const { data, loading, error } = useFetchApi(search, 1);

  const handleSearch = (data) => {
    setSearch(data);
  };
  console.log(data);
  useEffect(() => {}, [search]);

  return (
    <div>
      <h2>Home</h2>
      <SearchBar handleSearch={handleSearch} />
      <hr />
      {loading && <Loading />}
      {search &&
        !loading &&
        data?.articles.map((el, index) => <NewsCard key={index} el={el} />)}
    </div>
  );
};

export default Home;
