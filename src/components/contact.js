import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Fade from 'react-reveal/Fade';
import img from '../images/image.jpg'; 


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          
          <Cell col={6}>
          <Fade top>
            <h2>Asick Ahamed</h2>
            <img src={img} className="avatar-img" />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em',textAlign:'justify'}}>As a web developer with a bachelor’s degree in Information Technology and 7 years’ professional experience in India, the UAE, my objective is to make a positive impact on my clients, co-workers, and the Internet. I am deeply passionate about using my skills and experience to develop compelling, up-to-date, responsive, and secure websites and web applications based on the latest trends.

</p>
         </Fade>
          </Cell>
          <Cell col={6}>
           <Fade top>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    <a href="tel:491512 4457840">+(49 1) 512 4457840</a>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-fax" aria-hidden="true"/>
                    <a href="tel:491512 4457840">+(49 1) 512 4457840</a>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    <a href="mailto:ashiq.it@gmail.com">ashiq.it@gmail.com</a>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    <a href="https://join.skype.com/invite/iLbvkjOic3Ft" rel="noopener noreferrer" target="_blank">ashiq.it</a> 
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
            </Fade>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
