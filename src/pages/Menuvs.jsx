import Accordion from 'react-bootstrap/Accordion';
import Code from "../Code";
import styles from "../pages/Menu.module.css";

function Menuvs() {

  const comandosvs = `
  Alt+ flechas 	/	Mover elemento seleccionado
  Alt + Z: 	/	En caso de que nuestro código sea más extenso que la anchura de la pantalla, este atajo nos permite romper la línea y así utiliza únicamente el ancho de nuestra pantalla.
  Ctrl + Shift + P:  /	Abre el desplegable de comandos.

  Gestión de archivos con VS Code
  Para gestionar los archivos con mayor agilidad, podemos hacer uso de los siguientes atajos:
  Ctrl + O: 	/	Abre el explorador de archivos para abrir un archivo existente en el equipo.
  Ctrl + N: 	/	Crea un nuevo archivo.
  Ctrl + S: 	/	Guarda el archivo actual.
  Ctrl + Shift + S:  /	Abre el explorador de archivos para guardar el archivo actual.
  Ctrl + K + Ctrl + W: /	 Cierra todas las pestañas que estén abiertas en el editor.
  Ctrl + Shift + T:  /	Permite abrir las últimas pestañas que hemos ido cerrando por orden (Para aquellos despistes que cerramos sin querer).
  Ctrl + 2:  /	Nos permite dividir el editor para así tener varios archivos abiertos y poder comparar. Se puede cambiar el 2 por otro número el cual será la división de pestañas.
  
  
  Atajos para buscar dentro del editor
  Si lo que se pretende es buscar código y reemplazarlo de forma rápida y eficaz sin tener que ir uno por uno, a continuación te dejamos los siguientes atajos:
  
  Ctrl + F: 	/	Abre el buscador en el cual vamos a poder realizar búsquedas dentro del archivo que tengamos abierto.
  Ctrl + H: 	/	Abre el mismo buscador que en el atajo anterior, pero ahora también tenemos otro campo donde podemos indicarle el texto a sustituir. Es decir, podemos decirle que busque lo que nos interese y que lo sustituya por lo que le introducimos.
  Ctrl + G: 	/	Hay ocasiones que los archivos son muy extensos y tediosos de navegar por el, pero gracias a este atajo, podremos desplazarnos a la línea que nos interese.
  Alt + Enter: 	/	En el momento se ha realizado dicha búsqueda, podemos utilizar este atajo para seleccionar todos los elementos que se encuentren.
  Ctrl + D: 	/	Si seleccionamos un fragmento de código con las teclas Ctrl o Shift + flechas izquierda/derecha, al realizar este atajo añadiremos dicho código seleccionado al buscador.
    
  `;

    return (
      <>
      <Accordion className={styles.acordion}>
        <Accordion.Item  className={styles.item} eventKey="0">
          <Accordion.Header className= {styles.acordiontitle} >COMANDOS BÁSICOS VS CODE</Accordion.Header>
          <Accordion.Body className={styles.acordionbody}>
          <div className="App">
          <Code code={comandosvs} language="bash" />
          </div>
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        </>
  );
}

export default Menuvs;