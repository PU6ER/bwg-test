"use client";

import { useQuery } from "@tanstack/react-query";
import { INews } from "@/app/app.interface";
import axios from "axios";
import { timeConverter } from "@/helpers/time";
import newsService from "@/services/news.service";
import { useNews } from "@/app/hooks/useNews";
import { useNewsById } from "@/app/hooks/useNewsById";
import { useEffect, useState } from "react";
import styles from "@/styles/NewsStory.module.scss";
import Link from "next/link";
const NewsStory = (id: { id: number }) => {
  let date = "";
  const { data, isLoading } = useNewsById(id.id);

  return (
    <div>
      {isLoading ? (
        <div>Loding...</div>
      ) : data ? (
        <Link href={`/news/${data.id}`}>
          <div className={styles.card}>
            <span>{data.title}</span>
            <div className="">
              <span>{data.score} points</span>
              <span> by {data.by} </span>
              {/* <span>{`${date.getDay()}/${date.getMonth()}/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`}</span> */}
              <span>{timeConverter(data.time)}</span>
            </div>
          </div>
        </Link>
      ) : null}
    </div>
  );
};

export default NewsStory;
