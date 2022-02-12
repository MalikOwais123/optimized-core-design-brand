import React, { useState, useEffect } from "react";
import ShowBlogDetail from "../../../components/ShowBlogDetail/ShowBlogDetail";
import Drawer from "../../../components/Drawer/Drawer";
import BlogCard from "../../../components/blogCard/blogCard";
import classList from "./index.module.scss";
import Section from "../../../components/Section/Section";
import { useRouter } from "next/router";
import PageTitle from "../../../components/PageTitle/PageTitle";
import dynamic from "next/dynamic";
const InfiniteScroll = dynamic(
  () => import("../../../components/InfiniteScroll/InfiniteScroll"),
  {
    ssr: false,
  }
);

const index = ({ data }) => {
  const router = useRouter();
  const { blog } = data || {};
  const [blogsData, setBlogsData] = useState([]);
  const [singleBlogData, setSingleBlogData] = useState(blog);
  const [handleDrawer, setDrawer] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // fetch all blogs list
    // fetchAllBlogs();
    fetchInitiallBlogs();
  }, []);

  const getPaginatedBlogs = async (page) => {
    try {
      const blogs = await fetch(
        `http://localhost:8001/blogs?_page=${page}&_limit=4`
      );
      const blogsDataRes = await blogs.json();
      setBlogsData([...blogsData, ...blogsDataRes]);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchInitiallBlogs = async () => {
    try {
      const blogs = await fetch(
        `http://localhost:8001/blogs?_page=${page}&_limit=4`
      );
      const blogsData = await blogs.json();
      setBlogsData(blogsData);
    } catch (error) {
      console.log(error);
    }
  };

  let handleDrawerCollapse = () => {
    setDrawer(!handleDrawer);
  };

  const handleBlogClick = (id) => {
    const blog = blogsData.find((blog) => blog.id === id);
    router.push(`/blogs/${blog.id}`, null, { shallow: true });
    setSingleBlogData(blog);
    handleDrawerCollapse();
  };

  useEffect(() => {
    if (page !== 1) {
      getPaginatedBlogs(page);
    }
  }, [page]);

  const blogStyle = {
    padding: "0px 30px 30px 30px",
  };

  const para =
    "We help our clients elevate their business through engaging brand identities and innovative digital marketing techniques. Looking to expand your brand reach and maximize your ROI? Let us help you create an innovative, effective, responsive, intuitive, SEO-friendly, attractive, and eye-catching web presence to capture more clients.";

  return (
    <>
      <PageTitle title="BLOG" content={""} woodenImage={false} />
      <Section>
        <div className={classList.showBlogDetialMain}>
          <ShowBlogDetail data={singleBlogData} />
          {/* SHOW OTHER BLOGS */}
          <Drawer showDrawer={handleDrawer} handleDrawer={handleDrawerCollapse}>
            <InfiniteScroll
              length={blogsData?.length ?? 0}
              inverse={false}
              page={page}
              setPage={setPage}>
              {blogsData?.map((blog) => (
                <div key={blog.id}>
                  <BlogCard
                    onClick={() => handleBlogClick(blog.id)}
                    postedBy={`Posted by ${" "} ${blog?.postedBy.fullName}`}
                    userImage={blog?.postedBy.photo}
                    blogImage={blog?.coverPhoto}
                    date={blog?.createdAt}
                    blogTitle={blog?.title}
                    blogDesc={blog?.content}
                    key={blog?.id}
                    style={blogStyle}
                  />
                </div>
              ))}
            </InfiniteScroll>
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
