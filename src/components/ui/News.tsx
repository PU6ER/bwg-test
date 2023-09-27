"use client";

import { useQuery } from "@tanstack/react-query";
import { INews } from "@/app/app.interface";
import axios from "axios";
import styles from "@/styles/News.module.scss";
import newsService from "@/services/news.service";
import { useNews } from "@/app/hooks/useNews";
import { useNewsById } from "@/app/hooks/useNewsById";
import { useEffect, useState } from "react";

import NewsStory from "./NewsStory";
const News = () => {
  const { data, isSuccess, isLoading, isFetching, refetch } = useNews();

  return (
    <div>
      <h1>Hacker News</h1>
      <button className={styles.refresh} onClick={() => refetch()}>
        Refresh
      </button>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        data?.map((newsId) => <NewsStory id={newsId} />)
      )}
    </div>
  );
};

export default News;
