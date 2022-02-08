import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ShowBlogDetail from "../../../components/ShowBlogDetail/ShowBlogDetail";
import Drawer from "../../../components/Drawer/Drawer";
import BlogCard from "../../../components/blogCard/blogCard";
import classList from "./index.module.scss";
import Section from "../../../components/Section/Section";

const index = ({ data }) => {
  const { blog } = data || {};
  const router = useRouter();
  const [blogsData, setBlogsData] = useState([]);
  const [singleBlogData, setSingleBlogData] = useState(blog);
  const [handleDrawer, setDrawer] = useState(false);
  console.log("singleBlogData", singleBlogData);

  useEffect(() => {
    // fetch all blogs list
    fetchAllBlogs();
  }, []);

  const fetchAllBlogs = async () => {
    const blogs = await fetch(`http://localhost:8001/blogs`);
    const blogsData = await blogs.json();
    setBlogsData(blogsData);
  };

  let handleDrawerCollapse = () => {
    setDrawer(!handleDrawer);
  };

  return (
    <>
      <Section>
        <div className={classList.showBlogDetialMain}>
          <ShowBlogDetail data={singleBlogData} />
          {/* SHOW OTHER BLOGS */}
          <Drawer showDrawer={handleDrawer} handleDrawer={handleDrawerCollapse}>
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
          </Drawer>
        </div>
      </Section>
    </>
  );
};

export async function getServerSideProps(context) {
  //ONLY EXECUTED AT SERVER SIDE WILL FETCH SINGLE BLOG AND RELATED BLOGS
  var { query } = context;
  try {
    var blog = {};
    var { id: blogId } = query;
    if (blogId) {
      //fetch and send job and jobs
      const blogById = await fetch(`http://localhost:8001/blogs/${blogId}`);
      blog = await blogById.json();
    }
    return {
      props: {
        data: {
          blog,
        },
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        data: {},
      },
    };
  }
}

export default index;
