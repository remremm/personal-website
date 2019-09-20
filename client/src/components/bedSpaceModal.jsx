import React from 'react';
import styles from '../styles/bedSpaceModal.css';
import FEC from '../../dist/FEC.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const BedSpace = (props) => {
  return(
    <div styles={props.isShown} className={styles.mainContainer}>
      <div className={styles.backGround}>
        <FontAwesomeIcon onClick={props.hideModal} className={styles.backButton} icon={faTimes} />
        <div>
          <img onClick={props.hideModal} className={styles.imgSizeBedSpace} src={FEC}></img>
        </div>
      </div>
    </div>
  )
}

export default BedSpace;