import React, { Component } from 'react'
import greyWall from './image/P1010306-grey-wall.JPG'
import portraitIconMD from './image/nv-mugshot-circle-icon100px-dither.png'
import { Parallax, Background } from 'react-parallax'
import { Row, Col } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import './FlatParallax.css'
import smoothScroll from '../bower_components/smoothscroll/dist/smoothscroll'

export default class FlatParallax extends Component {
  constructor(){
    super()
    this.state = ({ atBottom: false })
    this.toggleScroll = this.toggleScroll.bind(this)
    smoothScroll.polyfill()
  }

  toggleScroll() {
    console.log('toggle function hit')
    if(this.state.atBottom) {
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    // } else if (window.innerHeight < SET THIS MEDIA BREAKPOINT) {
    //   // scroll only partway
    } else {
      // document.querySelector('.page-top').scrollIntoView({behavior: 'smooth'})
      window.scrollTo({top: 2000, left: 0, behavior: 'smooth'})
    }
    this.setState({ atBottom: !this.state.atBottom })
  }

  render() {
    return (
      <div className="App">
        <div className="page-top"></div>
        {/* <div className="container"> */}
          <Parallax strength={300} blur={50}>
            <div className="header-container">
              <header className="header">
                <h1 className="me flat-title">Nicholas Vanvoorthuysen</h1>
                {/* <div className="link-container"> */}
                <h2 className="icon-link-heading">
                  <FontAwesome name="envelope" className="link" />
                  <FontAwesome name="linkedin-square" className="link" />
                  <FontAwesome name="github" className="link" />
                  {/* <i className="fa fa-github"></i> */}
                </h2>
                {/* </div> */}
                <h3 className="dev-title">software developer</h3>
                <h1 className="dev-symbol">&#60;/></h1>
              </header>
            </div>
            <Background blur={50}>
              <img src={greyWall}
                className="background-image"
                role="presentation"/>
            </Background>
            <div className="abt-section">
              <h4 className="abt-title abt-text" onClick={this.toggleScroll}>
                <FontAwesome name="angle-double-down"/>
                  <strong onClick={this.toggleScroll}> ABOUT </strong>
                <FontAwesome name="angle-double-down"/>
              </h4>
              {/* <div className="row-wrapper"> */}
                <Row className="bs-row">
                  <Col className="left-info abt-col" xs={12} sm={12} md={6}>
                    <img src={portraitIconMD} className="portrait-icon" alt=""/>
                    <hr/>
                    <p><strong className="abt-col-title"> Hi! </strong>
                    I'm Nick and I'm a software developer. </p>
                    <p>With a background in engineering and video production,
                    I am a versatile creator and determined problem-solver in all things media.</p>
                    <p>I love building interesting user interfaces from sleek, minimal web applications to rich new media experiences. </p>
                    <hr/>
                  </Col>
                  <Col className="skills abt-col" xs={12} sm={12} md={6}>
                    <strong className="abt-col-title">CURRENT SKILLS:</strong>
                    <hr/>
                    <ul className="skills-list">
                      <li>Javascript/ES6</li>
                      <li>HTML5</li>
                      <li>React</li>
                      <li>CSS3</li>
                      <li>Angular</li>
                      <li>Git & github</li>
                      <li>Node.js</li>
                      <li></li>
                    </ul>
                    <hr/>
                  </Col>
                </Row>
              {/* </div> */}
            </div>
          </Parallax>
        {/* </div> */}
        <div className="page-bottom"></div>
      </div>
    );
  }
}
