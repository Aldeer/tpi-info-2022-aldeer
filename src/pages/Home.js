import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import NewsCard from "../components/card/NewsCard";
import SearchBar from "../components/forms/SearchBar";
import { useFetchApi } from "../hooks/useFetchApi";
import NoResults from "../components/NoResults";
import TotalResults from "../components/TotalResults";
import Pagination from "../components/Pagination";

const Home = () => {
  const [search, setSearch] = useState(null);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const { data, loading, error } = useFetchApi(search, page);

  const handleSearch = (data) => {
    setSearch(data);
    setPage(1);
  };

  const totalPage = () => {
    if (data) {
      setTotal(Math.ceil(data.totalResults / 10));
    }
  };

  useEffect(() => {
    totalPage();
  }, [search, page]);

  return (
    <div>
      <h2>Home</h2>
      <SearchBar handleSearch={handleSearch} />
      <hr />
      {data?.totalResults && <TotalResults totalResults={data.totalResults} />}
      {loading && <Loading />}
      {search &&
        !loading &&
        data?.articles.map((el, index) => <NewsCard key={index} el={el} />)}
      {data !== null && data?.totalResults > 0 && !loading && (
        <Pagination
          setTotal={setTotal}
          total={total}
          setPage={setPage}
          page={page}
        />
      )}
    </div>
  );
};

export default Home;
