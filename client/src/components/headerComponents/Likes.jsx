import React from 'react';
import styles from '../../styles/Likes.css';

const Likes = (props) => {
  return (
    <div className={styles.likes}>
      <h3><a className={styles.link} href={props.link}>{props.like}</a></h3>
      <div className={styles.content} style={{backgroundImage: `url(${props.url})`, backgroundSize: 'cover', objectFit: 'contain'}}>
        <div className={styles.contentBox}></div>
      </div>
    </div>
  )
}

export default Likes;