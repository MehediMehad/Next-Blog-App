import Spinner from "@/components/ui/Spinner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next Blogs",
  description: "",
};
const BlogsLoading = () => {
  return (
    <div>
      <Spinner />
    </div>
  );
};

export default BlogsLoading;
