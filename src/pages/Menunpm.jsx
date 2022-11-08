import Accordion from 'react-bootstrap/Accordion';
import Code from "../Code";
import styles from "../pages/Menu.module.css";

function Menunpm() {

  const npm = `
  npx create-react-app my-app / crear app react
  
  npm install react-bootstrap bootstrap  /instalar react bootstrap
  
  npm install react-icons –save	/instalar react iconos
  
  npm install react-router-dom@6  /instalar react router v6
  
  npm install -D tailwindcss / instalar tailwind css
  
  npx tailwindcss init /iniciar tailwind
  
  npm install -g sass / instalar Sass
  
  npm install --save styled-components /instalar styled components
  
  npm install react-hook-form /  instalar react hook form 
  
  `;

    return (
      <>
      <Accordion className={styles.acordion}>
        <Accordion.Item  className={styles.item} eventKey="0">
          <Accordion.Header className= {styles.acordiontitle} >COMANDOS NPM</Accordion.Header>
          <Accordion.Body className={styles.acordionbody}>
          <div className="App">
          <Code code={npm} language="bash" />
          </div>
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        </>
  );
}

export default Menunpm;