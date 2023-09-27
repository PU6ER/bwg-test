import newsService from "@/services/news.service";
import { useQuery } from "@tanstack/react-query";

export const useNews = () => {
  return useQuery(
    ["news"],
    () => newsService.getNewsId(),

    {
      select: ({ data }) => data.splice(0, 100),
      refetchInterval: 60000,
      refetchIntervalInBackground: true,
    }
  );
};
