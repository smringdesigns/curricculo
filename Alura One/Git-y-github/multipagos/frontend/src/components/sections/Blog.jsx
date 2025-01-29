import React from "react";
import BlogCard from "./utils/BlogCard";
import { sectionData } from "../../mockData/sectionData";
import { blogData } from "../../mockData/blogData";

const Blog = () => {
  const { title, description } = sectionData.blog;

  return (
    <section className="Blog">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center flex-column text-center" data-aos="fade-up">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="row gy-md-0 gy-4">
          {blogData.slice(0, 3).map((blog, index) => (
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