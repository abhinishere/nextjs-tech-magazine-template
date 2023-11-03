// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: "string", required: true },
    subtitle: { type: "string", required: true },
    date: { type: "date", required: true },
    featured_image: { type: "string", required: true },
    topics: { type: "list", of: { type: "string" }, required: true },
    author: { type: "string", required: true },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/${post._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({ contentDirPath: "posts", documentTypes: [Post] });
