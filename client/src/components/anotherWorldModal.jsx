import React from 'react';
import MVP from '../../dist/MVP.jpg'
import styles from '../styles/AnotherWorldModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const AnotherWorldModal = (props) => {
  return(
    <div styles={props.isShown} className={styles.mainContainer}>
      <div className={styles.backGroundAnotherWorld}>
        <FontAwesomeIcon onClick={props.hideModal} className={styles.backButtonAnotherWorld} icon={faTimes}/>
        <div>
          <img onClick={props.hideModal} className={styles.imgSizeAnotherWorld} src={MVP}></img>
        </div>
      </div>
    </div>
  )
}

export default AnotherWorldModal;