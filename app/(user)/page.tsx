import { previewData } from "next/headers";
import { groq } from "next-sanity";

const query = groq`*[_type == "post" && slug.current == $slug][0]`;

const page = () => {
  if (previewData()) {
    return <div>Preview Mode</div>;
  }

  return (
    <div>
      <h1>Not in Preview Mode</h1>
    </div>
  );
};

export default page;
