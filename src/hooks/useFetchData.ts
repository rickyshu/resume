// axios
import axios from "axios";

// react query
import { useQuery } from "@tanstack/react-query";

export function useFetchData<T>(url: string) {
  const fetchData = async (url: string) => {
    const response = await axios.get(url);
    return response.data;
  };

  const { data } = useQuery<T>({
    queryKey: ["data", url],
    queryFn: () => fetchData(url),
  });

  return { data };
}
