"use client";

import { useNewsById } from "@/app/hooks/useNewsById";
import { useParams } from "next/navigation";
import styles from "@/styles/NewsCard.module.scss";
import { timeConverter } from "@/helpers/time";
import CommentItem from "./CommentItem";
import { useRouter } from "next/navigation";

const NewsCard = () => {
  const params = useParams();
  const { push } = useRouter();
  const { data, refetch, isFetching } = useNewsById(+params.id);

  return (
    <div>
      <div className={styles.wrapper}>
        <div className="">
          <button className={styles.back} onClick={() => push("/")}>
            Go Back
          </button>
        </div>
        {data ? (
          <div className={styles.container}>
            <h2>{data?.title}</h2>
            <div className={styles.inner}>
              <span> by {data.by} </span>
              {/* <span>{`${date.getDay()}/${date.getMonth()}/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`}</span> */}
              <span>{timeConverter(data.time)} </span>
            </div>
            <a href={data.url}> Link to the story</a>
            <span>Comments: {data.descendants}</span>
            <button className={styles.refresh} onClick={() => refetch()}>
              Refresh
            </button>
            {isFetching ? (
              <div>Fetching...</div>
            ) : (
              data.kids &&
              data.kids.map((commentId) => {
                return <CommentItem id={commentId} />;
              })
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default NewsCard;
