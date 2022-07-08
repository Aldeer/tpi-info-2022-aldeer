import axios from "axios";
import { useEffect, useState } from "react";

const API_KEY = "0310baad58204d058d9ebfe95fde0597";
const ESP = "es";
const PAGE = "1";
const PAGE_SIZE = "20";

export const useCallApi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getApi = async () => {
    try {
      const response = await axios
        .get(`https://newsapi.org/v2/everything?q=bitcoin
        &apiKey=${API_KEY}
        &page=${PAGE}
        &pageSize=${PAGE_SIZE}
        &lenguage=${ESP}`);
      setData(response.data.articles);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {getApi(); }, []);
  
  return {data, loading, error}
};