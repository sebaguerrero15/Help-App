import Accordion from 'react-bootstrap/Accordion';
import styles from "../pages/Menu.module.css";

function Menusass() {
    return (
      <>
      <Accordion className={styles.acordion}>
        <Accordion.Item  className={styles.item} eventKey="0">
          <Accordion.Header className= {styles.acordiontitle} >Torpedo CSS</Accordion.Header>
          <Accordion.Body className={styles.acordionbody}>
          <pre className={styles.containercode}>
            <code>
              &lt;div className="prueba"&gt;&lt;div&gt;
            </code>
          </pre>

          </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        </>
  );
}

export default Menusass;