import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import img from '../images/image.jpg'; 
import Fade from 'react-reveal/Fade';



class Resume extends Component {
  download() {
    // fake server request, getting the file url as response
    setTimeout(() => {
      const response = {
        file: 'http://releases.ubuntu.com/12.04.5/ubuntu-12.04.5-alternate-amd64.iso',
      };
      // server sent the url to the file!
      // now, let's download:
      window.location.href = response.file;
      // you could also do:
      // window.open(response.file);
    }, 100);
  }
  render() {
    return(
      <div>
        <Grid>
        <Cell className="resume-left-col" col={8}>
        <Fade top>

            <h2>Education</h2>


            <Education
              startYear={2006}
              endYear={2009}
              schoolName="Bharathidasan University"
              schoolDescription="Bachelor in Information Technology"
               />

         
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startmonth="July"
              startYear={2017}
              endmonth="July"
              endYear={2019}
              jobName="Web Developer"
              jobDescription="The Elite Cars, Dubai, UAE"
              />

<Experience
              startmonth="April"
              startYear={2017}
              endmonth="May"
              endYear={2019}
              jobName="Web Developer"
              jobDescription="Dermazone Trading LLC, Dubai, UAE"
              />

<Experience
              startmonth="April"
              startYear={2014}
              endmonth="January"
              endYear={2015}
              jobName="Software Developer"
              jobDescription="Psiog Digital Pvt LTD, Chennai, India"
              />

<Experience
              startmonth="March"
              startYear={2011}
              endmonth="April"
              endYear={2014}
              jobName="Associate Software Engineer"
              jobDescription="Ahsan Technologies, Chennai, India"
              />

              
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="PHP"
                progress={100}
                />
                 <Skills
                  skill="MYSQL"
                  progress={80}
                  />
                <Skills
                  skill="HTML/CSS"
                  progress={82}
                  />
                  <Skills
                    skill="WordPress"
                    progress={75}
                    />
                    <Skills
                      skill="React"
                      progress={50}
                      />
                        <Skills
                      skill="Magento"
                      progress={70}
                      />
                       <Skills
                      skill="MVC"
                      progress={70}
                      />
       </Fade>

          </Cell>
          <Cell col={4} className="resume-right-col">
          <Fade top>
            <div style={{textAlign: 'center'}}>
            <img src={img} className="avatar-img" />
            </div>

            <h2 style={{paddingTop: '2em'}}>Asick Ahamed</h2>
            <h4 style={{color: 'grey'}}>Web & Front-end Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p className="text-justify">As a web developer with a bachelor’s degree in Information
Technology and 7 years’ professional experience in India, the UAE, my objective
is to make a positive impact on my clients, co-workers, and the
Internet. I am deeply passionate about using my skills and
experience to develop compelling, up-to-date, responsive, and
secure websites and web applications based on the latest
trends.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5> <i className="fa fa-map-marker" aria-hidden="true"/> Address</h5>
            <p>Holsteinische str,52, 12163, Berlin, Germany</p>
            <h5><i className="fa fa-phone" aria-hidden="true"/> Phone</h5>
            <p><a href="tel:491512 4457840">+(49 1) 512 4457840</a></p>
            <h5><i className="fa fa-envelope" aria-hidden="true"/> Email</h5>
            <p><a href="mailto:ashiq.it@gmail.com">ashiq.it@gmail.com</a></p>
            <h5><i className="fa fa-globe" aria-hidden="true"/> Web</h5>
            <p><a href="http://asickweb.com/">www.asickweb.com</a></p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h4><a href="#" onClick={this.download}><i className="fa fa-download" aria-hidden="true"/> Download CV</a></h4>
          </Fade>
          </Cell>
          
        </Grid>
      </div>
    )
  }
}

export default Resume;
