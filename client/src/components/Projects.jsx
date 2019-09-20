import React from 'react';
import styles from '../styles/Projects.css';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBinoculars } from '@fortawesome/free-solid-svg-icons';
import AnotherWorld from './anotherWorldModal.jsx';
import BedSpace from './bedSpaceModal.jsx';

class Projects extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      anotherWorld: 'hidden',
      bedSpace: 'hidden',
    }

    this.anotherWorld = this.anotherWorld.bind(this);
    this.bedSpace = this.bedSpace.bind(this);
  }

  anotherWorld(){
    if(this.state.anotherWorld === 'hidden'){
      this.setState({
        anotherWorld: 'visible'
      })
    }else{
      this.setState({
        anotherWorld: 'hidden'
      })
    }
  }

  bedSpace(){
    if(this.state.bedSpace === 'hidden'){
      this.setState({
        bedSpace: 'visible'
      })
    }else{
      this.setState({
        bedSpace: 'hidden'
      })
    }
  }


  render(){
    let modalView;

    if(this.state.anotherWorld === 'visible'){
      modalView = <AnotherWorld hideModal={this.anotherWorld} isShown={this.state.anotherWorld}/>
    }else if(this.state.bedSpace === 'visible'){
      modalView = <BedSpace hideModal={this.bedSpace} isShown={this.state.bedSpace}/>
    }

    return(
      <div className={styles.mainBody}>
        {modalView}
        <div className={styles.title}>
          <h1>PROJECTS</h1>
        </div>
        <div className={styles.projectContainer}>
          <div className={styles.projects}>
            <div className={styles.mobileProject}>
              <h3>Another World</h3>
              <div className={styles.mobileIcons}>
                <a className={styles.faGithub} href="https://github.com/remremm/AnotherWorld"><FontAwesomeIcon icon={faGithub} /></a>
                <span onClick={this.anotherWorld}><FontAwesomeIcon icon={faBinoculars} /></span>
              </div>
              <div className={styles.mobileList}>
                <ul>
                  <li>A choose your own adventure text based game</li>
                  <li>Developed utilizing React-Native, to re-render components on relevant state changes to create a polished user experience</li>
                  <li>Rendered story choices dynamically through the use of Postgres’s persistent storage system, allowing users to save their progress as they exit the application</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.projects}>
            <div className={styles.mobileProject}>
              <h3>BedSpace</h3>
              <div className={styles.mobileIcons}>
                <a className={styles.faGithub}  href="https://github.com/bedspace/related-listings"><FontAwesomeIcon icon={faGithub} /></a>
                <span onClick={this.bedSpace}><FontAwesomeIcon icon={faBinoculars} /></span>
              </div>
              <div className={styles.mobileList}>
                <ul>
                  <li>A RESTful, single-page home rental application</li>
                  <li>Developed modular front-end components with React for enhanced rendering speed to create a seamless user experience</li>
                  <li>Reduced page load times by optimizing MySQL queries to pre-fetch data needed at the time of load, thus increasing Google load speeds score from 37 to 10</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.projects}>
            <div className={styles.mobileProject}>
              <h3>iZippy</h3>
              <div>
                <a className={styles.faGithub}  href="https://github.com/izippy/PhotoCarousel"><FontAwesomeIcon icon={faGithub} /></a>
              </div>
              <div className={styles.mobileList}>
                <ul>
                  <li>System design for vacation rental application</li>
                  <li>Oversaw sprint planning, daily standups, and retrospectives using the agile methodology</li>
                  <li>Increased throughput from under 50 requests per second to 680 requests per second using Nginx as a load balancer, thus allowing more users to simultaneously access the web app</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects;