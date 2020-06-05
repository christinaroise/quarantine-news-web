import React from 'react';
import FeatureArea from '../../Components/FeatureArea/FeatureArea'
import Benefits from '../../Components/Benefits/Benefits'
import AppFeatures from '../../Components/AppFeatures/AppFeatures'
import TextBlockLTE from '../../Components/Universal/TextBlock/TextBlock'
import './Home.css'

function Home() {
    return (
      <div className="homeWrapper">
        <div className="home">
            <FeatureArea/>
            <TextBlockLTE text="The ultimate app for your daily dosage of worldwide news articles"/>
            <Benefits/>
            <AppFeatures/>
            <TextBlockLTE text="Visit AppStore or Google Play to download Quarantine today"/>
        </div>
      </div>
    );
  }
  
  export default Home;