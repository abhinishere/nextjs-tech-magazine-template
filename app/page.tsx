import PostPreview from "@/components/PostPreview/PostPreview";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  // generate previews of latest posts
  const postPreviews = posts.map((post: any, idx: any) => (
    <PostPreview key={idx} {...post} />
  ));
  return <main className="ListPosts">{postPreviews}</main>;
}
