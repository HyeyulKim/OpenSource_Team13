import useSWR from "swr";
import ApiRequest from "../util/ApiRequest";

export default function useTrendingMusic() {
  const { data, error } = useSWR("/music/trending", ApiRequest.getTrendingMusic);

  return {
    musics: data ? data.musics : null,
    isLoading: !error && !data,
    isError: error,
  };
}
