import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import profileImage from '../images/profile-image.png'; 
import img from '../images/image.jpg';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';





 


class Landing extends Component {
  

  render() {
    
    
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
          <Fade top>
           <img src={img} className="avatar-img" />
           </Fade>
            <div className="banner-text">
            <Zoom>
              <h1 className="pt-3">Asick Ahamed</h1> 
            </Zoom>
            <Zoom>
              <h2>Full Stack Web Developer</h2>
            </Zoom>
            <hr/>
            <Fade top>
          <p>PHP | MYSQL | HTML/CSS | Bootstrap | JavaScript | React | WordPress | Magento </p>
            </Fade>
            <Fade bottom>
        <div className="social-links">

          {/* LinkedIn */}
 
          <a href="https://www.linkedin.com/in/kpmasick/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>
           {/* Github */}
           <a href="https://github.com/devasick" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>
           {/* Freecodecamp */}
           <a href="https://join.skype.com/invite/iLbvkjOic3Ft" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-skype" aria-hidden="true" />
          </a>
           {/* Youtube */}
           <a href="https://www.facebook.com/ashiq.it" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-facebook-square" aria-hidden="true" />
          </a>
        </div>
        </Fade>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
