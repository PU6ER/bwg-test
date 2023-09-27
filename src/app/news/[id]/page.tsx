"use client";
import { useNewsById } from "@/app/hooks/useNewsById";
import { useRouter, useParams } from "next/navigation";
import { Inter } from "next/font/google";
import NewsCard from "@/components/ui/NewsCard";
import { NextPage } from "next";

const NewsIdPage: NextPage = () => {
  return (
    <main>
      <NewsCard />
    </main>
  );
};

export default NewsIdPage;
