import React from 'react'
import './resourcesStyles.css';
import BlogDisplay from './BlogsDisplay/blogdisplay';
import CustomButton, { CustomButton2 } from './../CustomButton';
import ServiceHero from '../services/hero/ServiceHero';

const Resources = () => {
  return (
    <div className="resourcesPage">
      <div className="resourceshero">
        <p>Discover</p>
        <h1>Unlock Your Potential</h1>
        <p>Explore our resources</p>
      </div>

      <div className="insightsSection">
        <p className="insightsSection-p">Insights</p>
        <h2 className="insightsSection-h2">Unlocking Digital Success</h2>
        <p className="insightsSection-p">
          Stay informed with our latest blog posts.
        </p>
        <BlogDisplay bgColor="#fffff8" />
        <div className="viewAllButton">
          <CustomButton text="View All" />
        </div>
      </div>

      <div className="articlessSection">
        <p className="insightsSection-p">Articles</p>
        <h2 className="insightsSection-h2">Stay Updated with GlyphicX</h2>
        <p className="insightsSection-p">
          Get the latest news and updates from GlyphicX.
        </p>
        <div className="viewAllButton">
          <CustomButton text="Read More" />
        </div>
        <BlogDisplay bgColor="#071C40" />
      </div>

      <div className="newsletterSection">
        <div className="newsletterDiv">
          <div className="newsletterDivDetails">
            <h2 className="insightsSection-h2">
              Unlock Your Marketing Potential Today
            </h2>
            <p className="insightsSection-p">
              Stay up to date with the latest industry trends and insights.
            </p>
            <div className="newsletterButtons">
              <CustomButton2 text="Subscribe" />
              <CustomButton text="Learn More" />
            </div>
          </div>
          <div
            className="newsletterImage"
            style={{
              backgroundImage: `url("https://www.simplilearn.com/ice9/free_resources_article_thumb/Is_Graphic_Design_A_Good_Career.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Resources