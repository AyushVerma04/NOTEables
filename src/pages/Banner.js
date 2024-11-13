import React from 'react';

const Banner = () => {
  return (
    <div className="banner">
      <img 
        src="./bannerImg.jpg" 
        alt="Banner" 
        className="banner-image" 
      />
      <div className="banner-content">
        <h1>Exams are close?</h1>
        <p>Get all your notes here.</p>
        <button className="banner-button">Click Here</button>
      </div>
    </div>
  );
};

export default Banner;
