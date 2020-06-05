import React from 'react';
import Feature from '../../Components/Universal/Feature/Feature'
import TextBlock from '../../Components/Universal/TextBlock/TextBlock'
import './About.css'

function About() {
  return (
    <div className="about">
      <Feature
      titleInImgBlock="[name].dev"
      title="Add a touch of gallows humor and you get Quarantine"
      text="The ida was born in the first weeks of lockdown in Norway. [Name] was a one year Frontend-development student at the Kristiania University College in Oslo, Norway. During one of, what durned out to be many, zoom-meetings, the students were presented with an example of how to fetch data from NewsAPI in a cross platform app framework. And as the professor was showing how to filter out certain content, [Name] suggested to sort out anything 'rona. "/>
      <TextBlock text="..and to think a simple joke can turn into such a great idea"/>
      <Feature
      rightAlignment={true}
      titleInImgBlock="Quarantine"
      title="..and so the app was born"
      text="It started out with the intention of just brightening peoples lives, by giving them the option of silencing the overwhelming coronavirus-news. The hope was to lessen the psycological-burden many felt by being locked inside their homes, unable to physical time with friends and family. But then Trump was added to the project and the concept became more of a funny joke to make people smile."/>
    </div>
  );
}

export default About