import fs from "fs";
import Markdown from "react-markdown";
import matter from "gray-matter";
// import getPostMetadata from "@/lib/getPostMetadata";
import Image from "next/image";
import styles from "./Article.module.css";
import MarkdownWrapper from "@/components/markdown-wrapper/MarkdownWrapper";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) return { title: "Post not found" };
  return { title: post.title };
};

function PostPage({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post)
    return (
      <div className={styles.ErrorMessage}>
        <h1>Page not found</h1>
        <p>
          Let&apos;s go to the <Link href="/">homepage</Link> instead.
        </p>
      </div>
    );
  return (
    <div className={styles.Article}>
      <div className={styles.ArticleTopics}>
        {post.topics.map((category: string) => {
          return (
            <Link
              href={`topic/${category}`}
              key={category}
              className={styles.ArticleTopic}
              style={{ textDecoration: "inherit" }}
            >
              {category}
            </Link>
          );
        })}
      </div>
      <h1 className={styles.ArticleTitle}>{post.title}</h1>
      <div className={styles.ArticleSubtitle}>{post.subtitle}</div>
      <Image
        src={post.featured_image}
        alt=""
        width={800}
        height={480}
        priority
      />
      <div className={styles.Byline}>
        {post.author} /{" "}
        <time dateTime={post.date}>
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
      </div>
      <div className={styles.ArticleBody}>
        <MarkdownWrapper>{post.body.raw}</MarkdownWrapper>
      </div>
    </div>
  );
}

export default PostPage;
