import useSWR from "swr";
import ApiRequest from "../util/ApiRequest";

export default function useDiaryHistory() {
  const { data, error } = useSWR("/diary", ApiRequest.getDiaryHistory);
  return {
    diaries: data ? data.diaries : null,
    isLoading: !error && !data,
    isError: error,
  };
}
