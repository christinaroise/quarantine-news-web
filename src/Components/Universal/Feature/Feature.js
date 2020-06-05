import React from 'react';
import Fade from 'react-reveal/Fade';
import './Feature.css'
import '../../../Stylesheets/Animations/keyframes.css'

const TextBlock = (props) => {
  let right = props.rightAlignment
  if(right){
    return(
      <div className="textBlockWrapper">
      <Fade right cascade>
        <div className="textComponent">
          <h2 className="colorMustard">{props.title}</h2>
          <p>{props.text}</p>
        </div>
      </Fade>
      <div className="textBlockImgWrapper">
          <div className="textBlockShape breathe"/>
          <div className="textBlockImg">
            <img
            alt={props.altTag}
            src={props.img}/>
            <h1>{props.titleInImgBlock}</h1>
          </div>
      </div>
    </div>
    )
  }else{
    return(
      <div className="textBlockWrapper">
      <div className="textBlockImgWrapper">
          <div className="textBlockShape breathe"/>
          <div className="textBlockImg">
            <img 
            alt={props.altTag}
            src={props.img}/>
            <h1>{props.titleInImgBlock}</h1>
          </div>
      </div>
      <Fade right cascade>
        <div className="textComponent">
          <h2 className="colorMustard">{props.title}</h2>
          <p>{props.text}</p>
        </div>
      </Fade>
    </div>
    )
  }
}

export default TextBlock;
