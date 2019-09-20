import React from 'react';
import styles from '../styles/Testimonials.css';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

const Testimonials = (props) => {
  return(
    <div className={styles.mainBody}>
      <div>
        <Card style={{ width: '18rem', height: '20rem' }}>
          <Card.Body>
            <Card.Title>Janelle Bautista</Card.Title>
            <Card.Text>
              "Amar always grounds me when I go out of scope for my current project."
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">She is too nice</small>
          </Card.Footer>
        </Card>
      </div>
      <div>
        <Card style={{ width: '18rem', height: '20rem'}}>
          <Card.Body>
            <Card.Title>Connie Lun</Card.Title>
            <Card.Text>
              "His pep talks are always insightful! So much optimism that he makes me want to work harder!"
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">THANKS CONNIE</small>
          </Card.Footer>
        </Card>
      </div>
      <div>
        <Card style={{ width: '18rem', height: '20rem' }}>
          <Card.Body>
            <Card.Title>Julio Fuentes</Card.Title>
            <Card.Text>
              "He's okay, I guess? Why am I answering this question?"
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Probably the most real</small>
          </Card.Footer>
        </Card>
      </div>
    </div>
    // <div className={styles.card}>
    //   <CardDeck className={styles.cardDeckCenter}>
    //     <Card>
    //       <Card.Body>
    //         <Card.Title>Janelle Bautista</Card.Title>
    //         <Card.Text>
    //           "Amar always grounds me when I go out of scope for my current project."
    //         </Card.Text>
    //       </Card.Body>
    //       <Card.Footer>
    //         <small className="text-muted">Thanks Janelle!</small>
    //       </Card.Footer>
    //     </Card>
    //     <Card>
    //       <Card.Body>
    //         <Card.Title>Connie Lun</Card.Title>
    //         <Card.Text>
    //           "His pep talks are always insightful! So much optimism that he makes me want to work harder!"
    //         </Card.Text>
    //       </Card.Body>
    //       <Card.Footer>
    //         <small className="text-muted">Thanks Connie!</small>
    //       </Card.Footer>
    //     </Card>
    //     <Card>
    //       <Card.Body>
    //         <Card.Title>Julio Fuentes</Card.Title>
    //         <Card.Text>
    //           "He's okay, I guess? Why am I answering this question?"
    //         </Card.Text>
    //       </Card.Body>
    //       <Card.Footer>
    //         <small className="text-muted">Probably the most real</small>
    //       </Card.Footer>
    //     </Card>
    //   </CardDeck>
    // </div>
  )
}

export default Testimonials;