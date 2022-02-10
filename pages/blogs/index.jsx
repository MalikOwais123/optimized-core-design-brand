import { useState, useEffect } from "react";
import BlogCard from "../../components/blogCard/blogCard";
import classList from "./blogs.module.scss";
import Section from "../../components/Section/Section";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import BlogSlider from "../../components/BlogSlider/BlogSlider";
import InputField from "../../components/InputField/InputField";
import CustomSelect from "../../components/CustomSelect/CustomSelect";

const InfiniteScroll = dynamic(
  () => import("../../components/InfiniteScroll/InfiniteScroll"),
  {
    ssr: false,
  }
);

const Blog = () => {
  const [blogsData, setBlogsData] = useState([]);
  const [page, setPage] = useState(1);
  const router = useRouter();

  useEffect(() => {
    // fetch all blogs list
    fetchInitiallBlogs();
  }, []);

  const fetchAllBlogs = async () => {
    const blogs = await fetch(`http://localhost:8001/blogs`);
    const blogsData = await blogs.json();
    setBlogsData(blogsData);
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

  const handleBlogClick = (id) => {
    const blog = blogsData.find((blog) => blog.id === id);
    router.push(`/blogs/${blog.id}`, null, { shallow: true });
  };

  const businessOption = [
    { label: "Personal Project", value: "personalProject" },
    { label: "Sole trader/self-employed", value: "sole" },
    {
      label: "Small business (1 to 9 Employees)",
      value: "smallBusiness",
    },
    {
      label: "Medium business (10 to 29 Employees)",
      value: "mediumBusiness",
    },
    {
      label: "Large business (30 to 99 Employees)",
      value: "largeBusiness",
    },
    {
      label: "Extra large business (100 or more Employees)",
      value: "extraLargeBusiness",
    },
    { label: "Charity/Non-profit", value: "charity" },
    { label: "Other", value: "other" },
  ];

  return (
    <>
      <Section>
        <div className={classList.searchTile}>
          <InputField
            type="text"
            // value={searchInput}
            customClass={classList.searchInput}
            placeholder="Search"
            onChange={(e) => console.log(e)}
            name="searchInput"
            // inputStyle={{ borderBottom: "1px solid black" }}
          />
          <CustomSelect
            placeholder="Category"
            type="light"
            Options={businessOption}
            onSelect={(e) => console.log(e)}
            customClass={classList.searchSelect}
          />
        </div>
        <BlogSlider blogsData={blogsData} handleBlogClick={handleBlogClick} />
        <div className={classList.blog_wrapper}>
          {/* <InfiniteScroll
            length={blogsData?.length ?? 0}
            inverse={false}
            page={page}
            setPage={setPage}> */}
          {blogsData?.map((blog) => (
            <div key={blog.id}>
              <BlogCard
                postedBy={`Posted by ${" "} ${blog?.postedBy.fullName}`}
                userImage={blog?.postedBy.photo}
                blogImage={blog?.coverPhoto}
                date={blog?.createdAt}
                blogTitle={blog?.title}
                blogDesc={blog?.content}
                onClick={() => handleBlogClick(blog.id)}
                key={blog?.id}
              />
            </div>
          ))}
          {/* </InfiniteScroll> */}
        </div>
      </Section>
    </>
  );
};

export default Blog;
