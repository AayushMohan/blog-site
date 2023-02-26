import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import { PreviewSuspense } from "next-sanity/preview";
import PreviewBlogList from "../../components/PreviewBlogList";

const query = groq`*[_type == "post"{
  ...,
  author->,
  categories[]->,
} | order(_createdAt desc)`;

const page = async () => {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-[#F7AB0A]"></p>
          </div>
        }
      >
        <PreviewBlogList />
      </PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);
  console.log(posts);
  return (
    <div>
      {/* Blog List */}
      <h1>Not in Preview Mode</h1>
    </div>
  );
};

export default page;
