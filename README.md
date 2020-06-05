This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# PROMO WEBSITE FOR QUARANTINE NEWS APP

This is a website used to promote the newly developed/launched news app: Quarantine. It uses <a href='https://www.npmjs.com/package/react-router-dom'>react-router-dom</a> and <a href='https://www.npmjs.com/package/react-router-hash-link'>react-router-hash-link</a> as a router and for anchor-links. 

In order to save time, <a href='https://www.react-reveal.com/'>react-reveal</a> has been used for on-scroll animation. Other animations uses css animation and @keyframes.

## Project structure
This is a multi-page application.
- App.js handles the navigation between pages by using HashRouter
- Pages: 
    - Home.js
    - About.js
- Components are shared between pages, some are universal and unspecific, others are more specificly related to certain areas, like Benefits.js. Universal components take on props.
- Components: 
    - Benefits
    - FeatureArea
    - Features
    - Footer
    - Header
    - Menu
    - TermsOfService
    - Universal
- Each folder contains one .js-file and one .css-file
- Stylesheets contains folders with .css-files that are global to the app, like @keyframe animations.
- The Assets folder contains images, pdf-files, and png-files that are used accross the app. 
- Icons (.png-files) are made by <a href="https://www.flaticon.com/authors/freepik">Freepik</a> from <a href="https://www.flaticon.com/">www.flaticon.com</a>
- iframe is used to show pdf-files in bowsers. Note that there are some pros and cons to using iframe: 
    - Pros: 
        - No file size limitations
        - Works on all popular desktop browsers: Chrome, Firefox, Safari, Opera, Edge, IE8+
        - It's a browser-native feature so it's a fast solution to show pdf-files
    - Cons: 
        - Works only with pdf file types
        - It doesn't work on mobile browsers:
            - <b>Safari</b> browser shows a message about 'no inline .pdf suppoert', and gives a dowload button
            - <b>Chrome</b> on iOS is doing the same as above, but on Android, it gives an option to choose any installed app on the device to open that file
            - <b>Mozilla</b> shows a message informing the user that a plugin is needed 
- prefers-reduces-motion has been added in index.html as a link:
    < link rel="stylesheet" href="../src/Stylesheets/Animations/keyframes.css" media="(prefers-reduced-motion: no-preference)" >
    - Read more about prefers-reduced-motion here: <a href="https://css-tricks.com/revisiting-prefers-reduced-motion-the-reduced-motion-media-query/">"Revisiting prefers-reduced-motion, the reduced motion media query" by Eric Bailey</a>
    - With a larger timeframe, more actions on this could have been taken.

This react-app is an open source example that serves as a demo of how you can develop a simple promotional website for your mobile app. 

