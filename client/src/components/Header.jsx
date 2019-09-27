import React, { Component } from 'react';
import styles from '../styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faBook } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {
  return (
    <div>
      <h1 className={styles.headerTitle}>Come Explore!</h1>
      <div className={styles.split}>
        <div className={styles.headerMain}>
          <div className={styles.headerInfo}>
            <div>
              <h3>Likes and interests</h3>
              <div className={styles.headerLists}>
                <div>
                  <ul>
                    <li>Coding (duh)</li>
                    <li>TV & Movies</li>
                    <li>Karaoke</li>
                    <li>Learning</li>
                  </ul>
                </div>
                <div>
                  <FontAwesomeIcon icon={faStar} size="10x" color="blue"/>
                </div>
              </div>
            </div>
            <div>
              <h3>Education</h3>
              <div className={styles.headerLists}>
                <div>
                  <FontAwesomeIcon icon={faBook} size="10x" color="green" />
                </div>
                <div>
                  <ul>
                    <li>Hack Reactor Graduate</li>
                    <li>Bachelors in Communications</li>
                    <li>Never give up kind of attitude</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.headerMain}>
          <div className={styles.headerInfo}>
            <div className={styles.backGroundInfo}>
              <h3>Background</h3>
              <div className={styles.headerLists}>
                <div>
                  <p>JLSKD LKJFLS:K L:SIJF:LEI LSIK L:SIEJFL: ISE FL:IJS :LEIFJ :LSIEFJ:L SIJF :LISJEF:LISJ FL:ISJ FL:ISJF:LIJS FIJSE:LIFJ S:LIFJ SLIEFJ SLIEFJ
                    SL:IEDJFL: SEIJF :LISJF :LISJELFIS LIEFOSI JFL:ISMEFL :IMSL:FI  LISJF:LIJS :IFJ:LIESJF ISJFL:IJSE F:LIJSE:F S:LIFJ:LS IJFL:SJ F
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;