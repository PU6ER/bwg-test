import newsService from "@/services/news.service";
import { useQuery } from "@tanstack/react-query";

export const useNewsById = (id: number) => {
  return useQuery(
    ["news", id],
    () => newsService.getNewsById(`${id}`),

    {
      select: ({ data }) => data,
    }
  );
};
