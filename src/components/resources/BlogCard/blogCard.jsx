import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./blogcard.css";
const BlogCard = ({id, image, category, name, description, authorName, authorImage, date, readTime, bgColor}) => {
  return (
    <Link to="/" className="blogCard" style={{border: `1px solid ${bgColor}`}}>
      <div
        className="blogImage"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      {/* <Image src={image} alt={name} width="64" height="64" /> */}
      <div className="blogInformation">
        <div className="go-corner" href="#">
          <div className="go-arrow">
            <FaArrowRightLong />
          </div>
        </div>
        <div className="blogDetails">
          <p>{category}</p>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <div className="authorDetailsDiv">
          <div
            className="authorImage"
            style={{
              backgroundImage: `url(${authorImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div>
            <p className="authorName">{authorName}</p>
            <div className="timeAndDate">
              <p>{date}</p>
              <p>&#8226;</p>
              <p>{readTime} min read</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard