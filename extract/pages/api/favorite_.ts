import useSWR from "swr";
import fetch from "../../lib/fetcher";

const useFavorite = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/favorite", fetch);
  return {
    data,
    error,
    isLoading,
    mutate,
  };
};
export default useFavorite;
