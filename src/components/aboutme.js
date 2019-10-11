import React, { Component } from 'react';
import { Grid, Cell,Card } from 'react-mdl';
import Fade from 'react-reveal/Fade';



class About extends Component {
  render() {
    return(
      <div style={{width: '80%', margin: 'auto'}} className="about-col">
    
       <Grid>
       <Cell  col={12}>
       <Fade top>
         <h2>About Me</h2>
         <hr></hr>
         <p>
         As a web developer with a bachelor’s degree in Information
Technology and 7 years’ professional experience in India, the UAE, my objective
is to make a positive impact on my clients, co-workers, and the
Internet. I am deeply passionate about using my skills and
experience to develop compelling, up-to-date, responsive, and
secure websites and web applications based on the latest
trends.
         </p>
         <p>
         I mainly specialize in database management, programming,
web application development, and database development and
architecture. And though web development is a highly technical
field, I love tasks that spark my creativity. Hence, I enjoy
working on projects that involve a mix of web and graphic
design.
         </p>
         <p>
         Moreover, I have vast knowledge and experience in CMS
frameworks such as WordPress, Magento, and PHP, HTML5,
CSS3, MYSQL, JavaScript, React, AJAX, JSON, JQuery, and XML.

         </p>
         <p>
         Though web development requires technical and problem-solving skills, I am able to incorporate my creativity into the task at hand. Being able to work both independently and in a team also gives me an edge in my craft; hence, helping the organization to reach its goals. 
         </p>
         <p>
         During my free time, I spend time with my family, play cricket with friends, and cooking.
         </p>
         </Fade>
       </Cell>
       </Grid>
      </div>
    )
  }
}

export default About;
