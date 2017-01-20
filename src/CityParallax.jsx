import React, { Component } from 'react'
// import cityScapeImage08 from './image/LICscape08.JPG'
// import cityScapeImage52 from './image/LICscape52.JPG'
import cityScapeImage02 from './image/LICscape02-tall3-blur2-web.png'
import { Parallax, Background } from 'react-parallax'

export default class CityParallax extends Component {
  render() {
    return (
      <div className="App">
        {/* <div className="spacer"></div> */}
        {/* <div className="App-header"> */}
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <h2>Nicholas Vanvoorthuysen</h2> */}
        {/* </div> */}
        <div className="App-intro">
          <Parallax strength={300} blur={50}>
            <div className="header-container">
              <header className="header">
                <h1 className="me">Nicholas Vanvoorthuysen</h1>
                  <i class="fi-social-github"></i>
                  <i class="fa fa-github"></i>
                <div className="nav-links">
                  <i class="fi-social-github"></i>
                  <i class="fa fa-github"></i>
                </div>
              </header>
            </div>
            <Background blur={50}>
              <img src={cityScapeImage02}
                className="background-image"
                role="presentation"/>
              {/* <img src="http://cdn.wallpapersafari.com/61/41/a0KHYs.jpg"
                role="presentation"/> */}
            </Background>
            {/* <div className="spacer"></div> */}
            <div className="section overlay">
              <h1 className="dev-symbol"><br/>&#60;/></h1>
              <h3 className="label-title">software developer</h3>
              <i class="fa fa-github"></i>
            </div>
            {/* <div className="section">
              <h3 className="section-title">PROJECTS</h3>
            </div>
            <div className="section">
              <h3 className="section-title">EXPERIENCE</h3>
            </div> */}
          </Parallax>
        </div>
      </div>
    );
  }
}
