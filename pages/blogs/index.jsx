import { useState, useEffect } from "react";
import BlogCard from "../../components/blogCard/blogCard";
import classList from "./blogs.module.scss";
import Section from "../../components/Section/Section";

const Blog = () => {
  const [blogsData, setBlogsData] = useState([]);

  useEffect(() => {
    // fetch all blogs list
    fetchAllBlogs();
  }, []);

  const fetchAllBlogs = async () => {
    const blogs = await fetch(`http://localhost:8001/blogs`);
    const blogsData = await blogs.json();
    setBlogsData(blogsData);
  };

  return (
    <>
      <Section>
        <div className={classList.blog_wrapper}>
          {blogsData?.map((blog) => (
            <div key={blog.id}>
              <BlogCard
                postedBy={`Posted by ${" "} ${blog?.postedBy.fullName}`}
                userImage={blog?.postedBy.photo}
                blogImage={blog?.coverPhoto}
                date={blog?.createdAt}
                blogTitle={blog?.title}
                blogDesc={blog?.content}
                key={blog?.id}
              />
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Blog;
