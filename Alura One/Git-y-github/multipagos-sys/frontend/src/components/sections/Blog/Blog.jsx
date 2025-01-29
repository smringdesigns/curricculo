import React from "react";
import BlogCard from "../utils/BlogCard";
import { blogData } from "../../../mockData/blogData";

const Blog = () => {
  return (
    <section className="Blog pt-0">
      <div className="container">
        <div className="row gy-4">
          {blogData.map((blog, index) => (
            <div className="col-md-4" key={index}>
              <BlogCard
                img={blog.img}
                title={blog.title}
                description={blog.description}
                date={blog.date}
                views={blog.views}
                link={blog.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
