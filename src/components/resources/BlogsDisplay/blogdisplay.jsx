// components/BlogDisplay.js
import React, {useState, useEffect} from "react";
import BlogCard from "./../BlogCard/blogCard";
import "./blogdisplay.css";

const BlogDisplay = ({bgType}) => {
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const handleSlideTransition = () => {
  //   setCurrentIndex((currentIndex + 1) % blogs.length);
  // };

  // useEffect(() => {
  //   const sliderInterval = setInterval(() => {
  //     handleSlideTransition();
  //   }, 5000);

  //   return () => clearInterval(sliderInterval);
  // }, [currentIndex]);

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
    // {
    //   id: 4,
    //   image:
    //     "https://www.simplilearn.com/ice9/free_resources_article_thumb/Is_Graphic_Design_A_Good_Career.jpg",
    //   category: "Travel",
    //   name: "Top 10 Destinations",
    //   description: "The best places to visit this summer.",
    //   authorName: "Emily White",
    //   authorImage:
    //     "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1720224000&semt=ais_user",
    //   date: "June 20, 2024",
    //   readTime: "7 min",
    // },
    // {
    //   id: 5,
    //   image:
    //     "https://www.simplilearn.com/ice9/free_resources_article_thumb/Is_Graphic_Design_A_Good_Career.jpg",
    //   category: "Education",
    //   name: "Online Learning Platforms",
    //   description: "The best platforms for online education.",
    //   authorName: "Michael Green",
    //   authorImage:
    //     "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1720224000&semt=ais_user",
    //   date: "June 15, 2024",
    //   readTime: "5 min",
    // },
  ];

  return (
    <>
      <div className="blogsContainer">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} bgColor={bgType} />
        ))}
      </div>

      {/* <div className="blogsContainer">
        {blogs.slice(currentIndex, currentIndex + 3).map((blog) => (
          <div className="blogCard">
            <BlogCard key={blog.id} {...blog} bgColor={bgType} />
          </div>
        ))}
      </div> */}
    </>
  );
};

export default BlogDisplay;




