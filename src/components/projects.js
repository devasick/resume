import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import Fade from 'react-reveal/Fade';
import project1 from '../images/project1.jpg'; 
import project2 from '../images/project2.jpg'; 
import project3 from '../images/project3.jpg'; 
import project4 from '../images/project4.jpg';
import project5 from '../images/project5.jpg';
import project6 from '../images/project6.jpg';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0,
                   projecturl:'' };

   
  }

   



  toggleCategories() {

    if(this.state.activeTab === 0){
     
      return(
        
        <div className="projects-grid">
         <Grid>
         <Fade top>
         <Cell col={4}>
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <img src={project1} style={{width: '100%'}} />
            <CardText>
            <h3>Zeeyarah</h3>
            </CardText>
            <CardActions border>
            <a href="https://www.zeeyarah.ae" rel="noopener noreferrer" target="_blank">
              Live Demo</a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          </Cell>
          {/* Project 2 */}
          <Cell col={4}>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <img src={project2} style={{width: '100%'}} />
            <CardText>
               <h3>Urban Automotive</h3>
            </CardText>
            <CardActions border>
            
            <a href="https://www.urban-automotive.ae/" rel="noopener noreferrer" target="_blank">Live Demo</a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          </Cell>
          {/* Project 3 */}
          <Cell col={4}>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <img src={project3} style={{width: '100%'}} /> 
            <CardText>
              <h3>Dermazone Store</h3>
            </CardText>
            <CardActions border>
             
            <a href="https://store.dermazone.net/" rel="noopener noreferrer" target="_blank">Live Demo</a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          </Cell>
          <Cell col={4}>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <img src={project4} style={{width: '100%'}} /> 
            <CardText>
              <h3>The Elite Cars</h3>
            </CardText>
            <CardActions border>
              
            <a href="https://theelitecars.com/" rel="noopener noreferrer" target="_blank">Live Demo</a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          </Cell>
          <Cell col={4}>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <img src={project5} style={{width: '100%'}} /> 
            <CardText>
             <h3>Pearl Motors</h3>
            </CardText>
            <CardActions border>
    
            <a href="https://pearl-motors.com" rel="noopener noreferrer" target="_blank">Live Demo</a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          </Cell>
          <Cell col={4}>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <img src={project6} style={{width: '100%'}} /> 
            <CardText>
            <h3>Suncity Motors</h3>
            </CardText>
            <CardActions border> 
            <a href="https://suncitymotors.net/" rel="noopener noreferrer" target="_blank">Live Demo</a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          </Cell>
          </Fade>
          </Grid>
         
        </div>

        


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>This is Angular</h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>This is VueJS</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>This is MongoDB</h1></div>
      )
    }

  }



  render() {
    console.log(project1)
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Recent projects</Tab>
        
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
