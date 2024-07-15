import React from "react";
import BlogCard from "./../BlogCard/blogCard";
import "./blogdisplay.css";

const BlogDisplay = ({ bgType }) => {
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
      name: "Embracing the Revolution: AI's Impact on Businesses",
      description:
        "Unlock new opportunities with AI technology, transforming industries and driving innovative business solutions.",
      authorName: "James Brown",
      authorImage:
        "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1720224000&semt=ais_user",
      date: "June 25, 2024",
      readTime: "6",
    },
  ];

  const transformName = (name) => {
    const charArray = name.split('');
    let newName = "";
    for (let i = 0; i < charArray.length; i++) {
      if (charArray[i] == "P" || charArray[i] == "p") {
        newName += charArray[i].toUpperCase();
      } else {
        newName += charArray[i].toLowerCase();
      }
    }
    return newName;
  };

  const transformedBlogs = blogs.map((blog) => ({
    ...blog,
    name: transformName(blog.name),
  }));

  return (
    <>
      <div className="blogsContainer">
        {transformedBlogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} bgColor={bgType} />
        ))}
      </div>
    </>
  );
};

export default BlogDisplay;
