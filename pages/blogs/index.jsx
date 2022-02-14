import { useState, useEffect } from "react";
import BlogCard from "../../components/blogCard/blogCard";
import classList from "./blogs.module.scss";
import Section from "../../components/Section/Section";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import BlogSlider from "../../components/BlogSlider/BlogSlider";
import InputField from "../../components/InputField/InputField";
import CustomSelect from "../../components/CustomSelect/CustomSelect";
import PageTitle from "../../components/PageTitle/PageTitle";
import { fetchResponse } from "../../utils/Data/helpers";

const InfiniteScroll = dynamic(
  () => import("../../components/InfiniteScroll/InfiniteScroll"),
  {
    ssr: false,
  }
);

const Blog = () => {
  const [blogsData, setBlogsData] = useState([]);
  const [blogSliderData, setBlogSliderData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [blogCategory, setBlogCategory] = useState("");
  const [page, setPage] = useState(1);
  const router = useRouter();
  const categoryOptions = [
    { label: "industry", value: "industry" },
    { label: "tech", value: "tech" },
    { label: "smart phone", value: "smart phone" },
    { label: "tablet", value: "tablet" },
    { label: "desktop", value: "desktop" },
    { label: "mobile", value: "mobile" },
    { label: "web", value: "web" },
  ];

  useEffect(() => {
    // FETCH INITIALL BLOGS
    fetchInitiallBlogs();
  }, []);

  const fetchAllBlogs = async () => {
    try {
      const { data: items } = await fetchResponse(
        `https://backend-develop.thecoredesigns.com/blogs`
      );
      setBlogsData(items);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchInitiallBlogs = async () => {
    try {
      const {
        data: { items },
      } = await fetchResponse(
        `https://backend-develop.thecoredesigns.com/blogs?page=1&limit=6`
      );
      setBlogSliderData(items);
      setBlogsData(items);
    } catch (error) {
      console.log(error);
    }
  };

  const handleBlogClick = (id) => {
    const blog = blogsData.find((blog) => blog.id === id);
    router.push(`/blogs/${blog.id}`, null, { shallow: true });
  };

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSelectChange = (e) => {
    setBlogCategory(e);
  };

  console.log("blogsData", blogsData);
  const getFilteredBlogData = () => {
    // CHECK IF BOTH NOT EXIST
    if (!searchInput && !blogCategory) {
      return blogsData;
    }
    // CHECK IF SEARCH INPUT EXIST
    if (searchInput && !blogCategory) {
      return blogsData.filter((blog) =>
        blog.title.toLowerCase().includes(searchInput.toLowerCase())
      );
    }
    // CHECK IF BLOG CATEGORY EXIST
    if (!searchInput && blogCategory) {
      return blogsData.filter((blog) => blog.category === blogCategory);
    }
    // CHECK IF BOTH EXIST
    if (searchInput && blogCategory) {
      return blogsData.filter(
        (blog) =>
          blog.title.toLowerCase().includes(searchInput.toLowerCase()) &&
          blog.category === blogCategory
      );
    }
  }; // END OF FILTERED BLOGS BY TITLE OR CATEGORY
  const para =
    "We help our clients elevate their business through engaging brand identities and innovative digital marketing techniques. Looking to expand your brand reach and maximize your ROI? Let us help you create an innovative, effective, responsive, intuitive, SEO-friendly, attractive, and eye-catching web presence to capture more clients.";
  return (
    <>
      <PageTitle
        title="BLOG"
        content={""}
        woodenImage={false}
        bgPayment={true}
      />
      <Section>
        <div className={classList.searchTile}>
          <input
            value={searchInput}
            onChange={handleSearchInput}
            name="searchInput"
            type="text"
            placeholder="Search"
          />
          <CustomSelect
            placeholder="Category"
            Options={categoryOptions}
            onSelect={handleSelectChange}
            customClass={classList.searchSelect}
          />
        </div>

        {/* SHOW BLOG SLIDER */}
        {blogSliderData?.length > 1 && (
          <BlogSlider
            blogsData={blogSliderData}
            handleBlogClick={handleBlogClick}
          />
        )}

        <div className={classList.blog_wrapper}>
          {/* <InfiniteScroll
            length={blogsData?.length ?? 0}
            inverse={false}
            page={page}
            setPage={setPage}> */}
          {getFilteredBlogData()?.map((blog) => (
            <div key={blog.id}>
              <BlogCard
                postedBy={`Posted by ${" "} ${blog?.fullName || ""}`}
                userImage={blog?.photo}
                blogImage={blog?.blogPhoto?.[0]?.url}
                date={blog?.createdAt}
                blogTitle={blog?.title}
                blogDesc={blog?.content}
                key={blog?.id}
                blogId={blog?.id}
                commentCount={blog?.commentCount}
                onClick={() => handleBlogClick(blog.id)}
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
