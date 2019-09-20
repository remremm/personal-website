import React from 'react';
import Modal from 'react-bootstrap/Modal'
import styles from '../styles/App.css';
import Navbar from './Navbar.jsx';
import LargePhoto from './LargePhoto.jsx';
import AboutMe from './AboutMe.jsx';
import Projects from './Projects.jsx';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      view: null,
    }

    this.changeView = this.changeView.bind(this);
    this.goHome = this.goHome.bind(this);
  }

  changeView(e){
    e.preventDefault();
    this.setState({
      view: e.target.outerText
    });
  }

  goHome(e){
    e.preventDefault();
    this.setState({
      view: 'Home'
    })
  }

  render(){
    let view;
    if(!this.state.view || this.state.view === 'Home'){
      view = <LargePhoto />
    }else if(this.state.view === 'Testimonials'){
      view = <AboutMe />
    }else if(this.state.view === 'Projects'){
      view = <Projects iZippy={this.iZippy} anotherWorld={this.anotherWorld} bedSpace={this.bedSpace}/>
    }

    return(
      <div className={styles.body}>
        <div>
          <Navbar goHome={this.goHome} changeView={this.changeView}/>
        </div>
        <div>
          {view}
        </div>
      </div>
    )
  }
}

export default App;