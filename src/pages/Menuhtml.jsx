import Accordion from 'react-bootstrap/Accordion';
import Code from "../Code";
import styles from "../pages/Menu.module.css";
import semantichtml from "../assets/semantichtml.png";


function Menuhtml() {

  const textohtml = `<b>Texto en negrita</b>
  <i>Texto en cursiva</i>
  <s>Texto tachado</s>
  <del>Texto eliminado</del>
  <ins>Texto insertado</ins>
  <sub>Texto de subíndice</sub>
  <sup>Texto en superíndice</sup>
  <small>Texto pequeño</small>
  <mark>Texto marcado</mark>
  <strong>Texto importante</strong>  
  <em>Texto enfatizado</em>
  `;

  const listahtml = `<ul>
  <li>Elemento 1</li>
  <li>Elemento 2</li>
  <li>Elemento 3</li>
  <li>Elemento 4</li>
</ul>

<!-- Más conocida como lista ordenada -->
<ol>
 <li>Elemento 1</li>
 <li>Elemento 2</li>
 ...
 <li>Elemento N</li>
</ol>
  `;

  const tablahtml = `<table></table> Comienzo y final de una tabla.
  <tr></tr> Comienzo y final de una fila.
  <td></td> Contenido de una celda
  <th>Mascota</th> Define la fila de encabezado
  `;

  const formulariohtml = `<form action="recibir.html" method="GET">
  <label for="curso">Curso: </label>
  <input id="curso" type="text" placeholder="Ingrese un curso" name="curso">
  <button type="submit">Enviar</button>
</form>
  `;

  return (
    <>
<Accordion className={styles.acordion}>
  <Accordion.Item  className={styles.item} eventKey="0">
      <Accordion.Header className={styles.acordiontitle}>FORMATO TEXTO HTML</Accordion.Header>
      <Accordion.Body className={styles.acordionbody}>
      <div className="App">
      <Code code={textohtml} language="html" />
      </div>
    </Accordion.Body>
    </Accordion.Item>
    </Accordion>

 <Accordion className={styles.acordion}>
    <Accordion.Item  className={styles.item} eventKey="0">
       <Accordion.Header className= {styles.acordiontitle}>ESTRUCTURA SEMÁNTICA HTML</Accordion.Header>
       <Accordion.Body className={styles.acordionbody}>
              <img src={semantichtml} alt="html-semantic" className={styles.semantic}></img>
     </Accordion.Body>
     </Accordion.Item>
     </Accordion>

  <Accordion className={styles.acordion}>
    <Accordion.Item  className={styles.item} eventKey="0">
      <Accordion.Header className={styles.acordiontitle}>LISTAS E INDICES</Accordion.Header>
      <Accordion.Body className={styles.acordionbody}>
      <div className="App">
      <Code code={listahtml} language="html" />
      </div>
    </Accordion.Body>
    </Accordion.Item>
    </Accordion>

    <Accordion className={styles.acordion}>
    <Accordion.Item  className={styles.item} eventKey="0">
      <Accordion.Header className={styles.acordiontitle}>TABLAS HTML</Accordion.Header>
      <Accordion.Body className={styles.acordionbody}>
      <div className="App">
      <Code code={tablahtml} language="html" />
      </div>
    </Accordion.Body>
    </Accordion.Item>
    </Accordion>

    <Accordion className={styles.acordion}>
    <Accordion.Item  className={styles.item} eventKey="0">
      <Accordion.Header className={styles.acordiontitle}>FORMULARIO HTML</Accordion.Header>
      <Accordion.Body className={styles.acordionbody}>
      <div className="App">
      <Code code={formulariohtml} language="html" />
      </div>
    </Accordion.Body>
    </Accordion.Item>
    </Accordion>

  </>
);
}
export default Menuhtml;