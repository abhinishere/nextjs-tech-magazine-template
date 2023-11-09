"use client";

import { allPosts } from "@/.contentlayer/generated";
import styles from "./Search.module.css";
import { usePathname } from "next/navigation";
import { compareDesc } from "date-fns";
import PostPreview from "@/components/PostPreview/PostPreview";

function Search() {
  const pathname = usePathname();
  const keyword = pathname.replace("/search/", "");
  const decodedKeyword = decodeURIComponent(keyword);

  const posts = allPosts
    .filter((post) => {
      // convert title array to lowercase to search for matches
      const titleInLowerCase = post.title.toString().toLowerCase();
      return titleInLowerCase.includes(decodedKeyword);
    })
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  // generate previews of posts
  const postPreviews = posts.map((post: any, idx: any) => (
    <PostPreview key={idx} {...post} />
  ));
  return (
    <div className={styles.SearchPageContainer}>
      <h1>Search Results for &quot;{decodedKeyword}&quot;</h1>
      <div className="ListPosts">{postPreviews}</div>
    </div>
  );
}

export default Search;
