import React from 'react';
import Fade from 'react-reveal/Fade';
import filter from '../../Assets/png/iPhone/filter.png'
import browse from '../../Assets/png/iPhone/browse.png'
import library from '../../Assets/png/iPhone/library.png'
import Feature from '../Universal/Feature/Feature'
import './AppFeatures.css'

function Features() {
    return (
        <div id="features">
            <Fade bottom>
                <Feature
                img={filter}
                title="For those heavy eyerolls because Trump is just too much"
                text="You can't live without news, but sometimes one person and one virus can be just a little too fame-seeking. So what's a better way to filter out all that uneccessary content than to flick a switch?"/>
            </Fade>
            <Fade bottom>
                <Feature
                rightAlignment={true}
                img={browse}
                title="..and when you prefer to read all of your newspapers in one app"
                text="Browse newspapers from 53 countries. And as an added bonus, save them to your library so that you can easily access their daily articles whenever you like."/>
            </Fade>
            <Fade bottom>
                <Feature
                img={library}
                title="It's the news you love, but on your terms"
                text="Yes, really. It's that simple. Pick a country, or two, and a category. You decide how you want to sort your news and most importantly: if and when you want to flick that filter-switch!"/>
            </Fade>
        </div>
    );
  }
  
  export default Features;