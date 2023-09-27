"use client";

import { useNewsById } from "@/app/hooks/useNewsById";
import { useParams } from "next/navigation";
import styles from "@/styles/CommentItem.module.scss";
import { timeConverter } from "@/helpers/time";
import { useCommentsById } from "@/app/hooks/useCommentsById";
import { useState } from "react";

const CommentItem = (id: { id: number }) => {
  const { data, refetch, isLoading, isFetching } = useCommentsById(+id.id);
  const [showComments, setShowComments] = useState(false);
  const toggleShowComments = () => {
    setShowComments((prevState) => !prevState);
  };
  return (
    <div className={styles.container}>
      {isLoading ? (
        <div>Loading...</div>
      ) : data ? (
        <div className={styles.inner}>
          <span>by {data?.by} </span>
          <span>{data?.text}</span>
        </div>
      ) : null}

      {data?.kids && (
        <button onClick={toggleShowComments} className={styles.more}>
          See more
        </button>
      )}
      {showComments &&
        data?.kids.map((commentId) => (
          <div className={styles.wrapper}>
            <CommentItem id={commentId} />
          </div>
        ))}
    </div>
  );
};

export default CommentItem;
