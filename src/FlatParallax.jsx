import React, { Component } from 'react'
import greyWall from './image/P1010306-grey-wall.JPG'
import { Parallax, Background } from 'react-parallax'
import FontAwesome from 'react-fontawesome'

export default class CityParallax extends Component {

  

  render() {
    return (
      <div className="App">
        {/* <div className="container"> */}
          <Parallax strength={300} blur={50}>
            <div className="header-container">
              <header className="header">
                <h1 className="me flat-title">Nicholas Vanvoorthuysen</h1>
                <div className="nav-links">
                  <h1 className="icon-link">
                    <FontAwesome name="envelope" className="link" />
                    <FontAwesome name="linkedin-square" className="link" />
                    <FontAwesome name="github" className="link" />
                    {/* <i className="fa fa-github"></i> */}
                  </h1>
                </div>
                <h3 className="dev-title">software developer</h3>
                <h1 className="dev-symbol">&#60;/></h1>
              </header>
            </div>
            <Background blur={50}>
              <img src={greyWall}
                className="background-image"
                role="presentation"/>
            </Background>
            <div className="section overlay">
              <h4 className="about"><strong> ABOUT </strong></h4>
            </div>
          </Parallax>
        {/* </div> */}
      </div>
    );
  }
}
