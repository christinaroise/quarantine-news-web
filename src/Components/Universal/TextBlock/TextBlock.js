import React from 'react';
import Fade from 'react-reveal/Fade';
import './TextBlock.css'
import '../../../Stylesheets/Animations/keyframes.css'

const TextComponent = (props) => {
    return (
      <div className="textBlockLTEComponent">
        <Fade bottom>
          <div className="textBlockLTEWrapper">
            <h2>{props.text}</h2>
          </div>
        </Fade>
      </div>
    );
  }
  
  export default TextComponent;