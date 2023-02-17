import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";

const query = groq`*[_type == "post"{
  ...,
  author->,
  categories[]->,
} | order(_createdAt desc)`;

const page = async () => {
  if (previewData()) {
    return <div>Preview Mode</div>;
  }

  const posts = await client.fetch(query);
  console.log(posts);
  return (
    <div>
      <h1>Not in Preview Mode</h1>
    </div>
  );
};

export default page;
