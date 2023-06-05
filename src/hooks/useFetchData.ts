import { useState, useEffect } from "react";
import axios from "axios";

export function useFetchData<T>(url: string) {
  const [data, setData] = useState<T | null>(null);

  const fetchData = async (url: string) => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return { data };
}
