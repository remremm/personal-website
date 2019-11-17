import React, { Component } from 'react';
import styles from '../styles/Header.css';
import Likes from './headerComponents/Likes.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faBook } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {
  constructor(props){
    super(props);

    this.state={
      likes: [
        {
          id: 1,
          like: 'LinkedIn!',
          url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80",
          link: "https://www.linkedin.com/in/amarvadhia/"
        },
        {
          id: 2,
          like: 'GitHub!', 
          url: "https://images.unsplash.com/photo-1550645612-83f5d594b671?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
          link: "https://github.com/remremm"
        }
      ]
    }
  }

  render(){
    return (
      <div>
        <div className={styles.headerContainer}>
          <div className={styles.headerTitleContainer}>
            <span className={styles.headerTitle}><h3>So, you want to learn more about me?</h3></span>
            <span className={styles.headerSubTitle}><h5>COME FIND OUT!</h5></span>
          </div>
        </div>
        <div className={styles.headerLikesContainer}>
          {this.state.likes.map(like => {
            return <Likes key={like.id} like={like.like} url={like.url} link={like.link}/>
          })}
        </div>
      </div>
    )
  }
}

export default Header;