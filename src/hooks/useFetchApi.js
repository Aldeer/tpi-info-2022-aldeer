import React, { useState, useEffect } from "react";
import axios from "axios";

let API_KEY = "0310baad58204d058d9ebfe95fde0597";

export const useFetchApi = (search, page) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  //console.log(search);
  let url = `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}&page=${page}&pageSize=10&language=es`;

  const fetch = async () => {
    if (search) {
      setLoading(true);
      return await axios
        .get(url)
        .then((res) => {
          //console.log(res);
          setData(res.data);
          setLoading(false);
        })
        .catch((err) => setError(err));
    }
  };

  useEffect(() => {
    fetch();
  }, [search, page]);

  return { data, loading, error };
};
