import newsService from "@/services/news.service";
import { useQuery } from "@tanstack/react-query";

export const useCommentsById = (id: number) => {
  return useQuery(
    ["comments", id],
    () => newsService.getCommentsById(`${id}`),

    {
      select: ({ data }) => data,
      refetchInterval: 600000,
    }
  );
};
