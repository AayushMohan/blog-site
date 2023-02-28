import React from "react";
import { usePreview } from "next-sanity/preview";

type Props = {
  query: string;
};

const PreviewBlogList = ({ query }: Props) => {
  const posts = usePreview(null, query);
  console.log("LOADING posts...", posts);
  return <div></div>;
};

export default PreviewBlogList;
