import React from 'react';
import Fade from 'react-reveal/Fade';
import Card from '../Universal/Card/Card'
import './Benefits.css'
import CoronaVirus from '../../Assets/png/BenefitIcons/png/001-coronavirus.png'
import Follow from '../../Assets/png/BenefitIcons/png/002-review.png'
import Save from '../../Assets/png/BenefitIcons/png/003-good.png'

function Benefits() {
    return (
        <div id="benefits">
            <Fade bottom>
                <div className="benefitsComponent">
                    <div className="benefitWrapper firstCard">
                        <Card
                        altTag="thumbs-up icon"
                        icon={Save}
                        title="Save interesting articles"/>
                    </div>
                    <div className="benefitWrapper">
                        <Card
                        altTag="coronavirus icon"
                        icon={CoronaVirus}
                        title="Hide anything Covid-19 and Trump"/>
                    </div>
                    <div className="benefitWrapper">
                        <Card
                        altTag="three starts icon"
                        icon={Follow}
                        title="Follow your favorite newspapers"/>
                    </div>
                </div>
            </Fade>
        </div>
    );
  }
  
  export default Benefits;