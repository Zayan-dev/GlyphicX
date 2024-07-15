import React from 'react'
import './resourcesStyles.css';
import BlogDisplay from './BlogsDisplay/blogdisplay';
import CustomButton, { CustomButton2 } from './../CustomButton';
import ServiceHero from '../services/hero/ServiceHero';

const Resources = () => {
  return (
    <div className="resourcesPage">
      <div className="resourceshero">
        <p className='subHeading'>Discover</p>
        <h1 className='mainHeading'>unlock Your Potential</h1>
        <p className='para'>Explore our resources</p>
      </div>

      <div className="insightsSection">
        <p className="subHeading insightsSection-p">Insights</p>
        <h2 className="mainHeading insightsSection-h2">unlocking Digital Success</h2>
        <p className="para insightsSection-p">
          Stay informed with our latest blog posts.
        </p>
        <BlogDisplay bgType="dark" />
        <div className="viewAllButton">
          <CustomButton text="View All" />
        </div>
      </div>

      <div className="articlessSection">
        <p className="subHeading insightsSection-p">Articles</p>
        <h2 className="mainHeading insightsSection-h2">Stay uPdated with GlyPhicX</h2>
        <p className="para insightsSection-p">
          Get the latest news and updates from GlyphicX.
        </p>
        <div className="viewAllButton" style={{ marginTop: "0px" }}>
          <CustomButton text="Read More" />
        </div>
        <BlogDisplay bgType="light" />
      </div>

      <div className="newsletterSection">
        <div className="newsletterDiv">
          <div className="newsletterDivDetails">
            <h2 className="mainHeading insightsSection-h2">
              unlock Your Marketing Potential Today
            </h2>
            <p className="para insightsSection-p">
              Stay up to date with the latest industry trends and insights.
            </p>
            <div className="newsletterButtons">
              <CustomButton2 text="Subscribe" />
              <CustomButton2 text="Learn More" />
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
