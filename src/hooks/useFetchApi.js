import React, { useState, useEffect } from "react";
import axios from "axios";

let API_KEY = "0310baad58204d058d9ebfe95fde0597";

export const useFetchApi = (search, page) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  let url = `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}&page=${page}&pageSize=10`;

  const fetch = async () => {
    if (search.length >= 3) {
      setLoading(true);
      return await axios
        .get(url)
        .then((res) => {
          setData(res.data);
          setLoading(false);
        })
        .catch((err) => setError(err));
    }
  };

  useEffect(() => {
    fetch();
  }, [search]);

  return { data, loading, error };
};
