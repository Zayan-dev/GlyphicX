// components/BlogDisplay.js
import React from "react";
import BlogCard from "./../BlogCard/blogCard";
import "./blogdisplay.css";

const BlogDisplay = (bgColor) => {
  const blogs = [
    {
      id: 1,
      image:
        "https://www.simplilearn.com/ice9/free_resources_article_thumb/Is_Graphic_Design_A_Good_Career.jpg",
      category: "Marketing",
      name: "The Power of Storytelling in Marketing",
      description:
        "Learn how storytelling can elevate your marketing strategy.",
      authorName: "John Doe",
      authorImage:
        "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1720224000&semt=ais_user",
      date: "July 1, 2024",
      readTime: "5",
    },
    {
      id: 2,
      image:
        "https://www.simplilearn.com/ice9/free_resources_article_thumb/Is_Graphic_Design_A_Good_Career.jpg",
      category: "Design",
      name: "The Art of Minimalism in Web Design",
      description:
        "Discover the beauty of minimalist web design and its impact.",
      authorName: "Jane Smith",
      authorImage:
        "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1720224000&semt=ais_user",
      date: "June 28, 2024",
      readTime: "4",
    },
    {
      id: 3,
      image:
        "https://www.simplilearn.com/ice9/free_resources_article_thumb/Is_Graphic_Design_A_Good_Career.jpg",
      category: "Technology",
      name: "The Future of AI in Business",
      description:
        "Explore the potential of artificial intelligence in driving business growth.",
      authorName: "James Brown",
      authorImage:
        "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1720224000&semt=ais_user",
      date: "June 25, 2024",
      readTime: "6",
    },
    // {
    //   id: 4,
    //   image: "/images/blog4.jpg",
    //   category: "Travel",
    //   name: "Top 10 Destinations",
    //   description: "The best places to visit this summer.",
    //   authorName: "Emily White",
    //   authorImage: "/assets/images/glyphicX.png",
    //   date: "June 20, 2024",
    //   readTime: "7 min",
    // },
    // {
    //   id: 5,
    //   image: "/images/blog5.jpg",
    //   category: "Education",
    //   name: "Online Learning Platforms",
    //   description: "The best platforms for online education.",
    //   authorName: "Michael Green",
    //   authorImage: "/assets/images/glyphicX.png",
    //   date: "June 15, 2024",
    //   readTime: "5 min",
    // },
  ];

  return (
    <div>
      <div className="blogsContainer">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} bgColor={bgColor} />
        ))}
      </div>
    </div>
  );
};

export default BlogDisplay;




