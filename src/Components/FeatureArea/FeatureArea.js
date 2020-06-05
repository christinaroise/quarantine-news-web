import React from 'react';
import dashboard from '../../Assets/png/iPhone/dashboard.png'
import './FeatureArea.css'

function FeatureArea() {
  return (
    <div
    id="home"
    className="featureArea">
      <div className="imageContainerLeft">
        <div className="imageContainer">
          <img 
          className="deviceImage slideIn"
          alt="Screenshot of Quarantine app on iPhoine" 
          src={dashboard} />
          <div className="absolutePositionedImageContainer slideInSecond">
            <img 
            className="deviceImage secondImage" 
            alt="Screenshot of Quarantine app on iPhone"
            src={dashboard} />
          </div>
        </div>
      </div>
      <div className="textContainer fadeIn">
          <p className="subtitle">Quarantine</p>
          <h2 className="title">For when you need<br></br>a little break</h2>
          <h3 className="description">The only news app that lets you filter out any Covid-19 and Trump related content.</h3>
          <a 
          href="https://github.com/christinaroise/Quarantine"
          target="_blank">
            <button
            className="featureButton">Get app</button>
          </a> 
      </div>
      <div className="imageContainerRight">
        <div className="imageContainer">
            <img 
            className="deviceImage slideIn"
            alt="Screenshot of Quarantine app on iPhoine" 
            src={dashboard} />
            <div className="absolutePositionedImageContainer slideInSecond">
              <img 
              className="deviceImage secondImage" 
              alt="Screenshot of Quarantine app on iPhone"
              src={dashboard} />
            </div>
          </div>
        </div>
      </div>
  );
}

export default FeatureArea;
