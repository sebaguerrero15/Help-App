import Accordion from "react-bootstrap/Accordion";
import Code from "../Code";
import styles from "../pages/Menu.module.css";

function Menucss() {
  const texto = `
  //Color del Texto
  color: #1162ac;
  color: chocolate;

  //Tipografia
  font-family: helvetica;
  font-family: charlemagne;

  //Tamaño del Texto = Define el tamaño del texto.
  Se puede definir con un tamaño fijo (expresado en píxeles: px), o con un tamaño escalable (em), 
  que indica la proporción respecto al tamaño inicial de la fuente (2em equivale al doble del tamaño inicial).
  font-size: 20px;
  font-size: 2em;

  //Texto en Negrita = Normal = 400, Negrita = 700 normal 
  | bold | bolder | lighter | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
  font-weight: bold;

  //Texto a Mayúsculas = Convierte a mayúsculas manteniendo un tamaño inferior.
  font-variant

  //Texto con sombra = Define una sombra que afecta a un texto a través de 4 parámetros 
  (separación horizontal, separación vertical, suavidad y color).
  El color se puede especificar con código hexadecimal o con el nombre del color (olive, gold, silver...)
  text-shadow: 2px 4px 6px #1162ac;

  //Alineación del Texto
  text-align: center;
  text-align: right;
  
  //Centrado Vertical ]= Sirve para definir la altura de la línea donde se muestra un texto y 
  por lo tanto para centrarlo verticalmente.
  El texto sólo puede ocupar una única línea y debe estar contenido dentro de un <div>.
  line-height: 70px;

  //Espacio entre letras = Define el espacio entre letras.
  Un valor positivo las aleja entre ellas, mientras que un valor negativo las acerca.
  letter-spacing: 3px;
  letter-spacing: -1px;

  //Espacio entre palabras = Funciona igual que "Espacio entre Letras".
  word-spacing: 10px;
  word-spacing: -5px;

  //Color de Fondo = Define el color de fondo de una caja (o <div>)
  Se puede indicar un color hexadecimal, nombre de color o rgb+a (alpha), 
  donde el 4º valor es la cantidad de transparencia (del 0 al 1).
  background-color: olive;
  background-color: rgba(12,65,32,0.5);

  `;

  const position = `
  //Separación Interna = Define el espacio existente entre el contenido y el borde de la caja.
  Si se especifica un solo valor será utilizado para la separación por los 4 lados. 
  Si se especifican 4 valores serán utilizados en orden (arriba, derecha, abajo e izquierda) y 
  se especifican 2 serán utilizados (arriba/abajo y derecha/izquierda).
  padding: 20px;
  padding: 20px 0px 6px 40px

  //Margenes y Separación = Define el espacio existente entre cajas (<div>) o bien entre cajas y los márgenes de la página.
  Si se especifica un solo valor será utilizado para la separación por 4 lados. Si se especifican 4 valores serán utilizados en orden (arriba, derecha, abajo e izquierda) y se especifican 2 serán utilizados (arriba/abajo y derecha/izquierda).
  #caja1{
    margin-left:35px;
    margin-bottom:20px;
  }
  #caja2{
    margin-left:40px;
  }
  
  #caja3{
    margin-left:35px;
    margin-bottom:20px;
  }


//Posicionamiento = Para ubicar un (<div>) en una coordenada concreta antes se tiene que definir su posicionamiento (position). Posteriormente, para indicar sus coordenadas se puede utilizar left o right para alinearlo horizontalmente desde la izquierda o derecha y/o top o bottom para alinearlo desde la parte superior o inferior.
position: relative / absolute / fixed;
left:20px;
right:20px;
top:40px;
bottom:40px;
}

//Sombras = Para definir una sombra a un (<div>) se deben indicar 4 valores. El primero y segundo es la separación horizontal y vertical de la sombra (con un número positivo se desplaza hacia derecha/abajo y con uno negativo hacia la izquierda/arriba, mientras que con "0" se sitúa justo en la posición del texto). El tercer valor hace referencia a la suavidad del borde de la sombra, mientras que el último valor pertenece al color que tendrá la sombra.
box-shadow: 2px 7px 5px gray;
box-shadow: 0 0 9px red;

//Alinear a la Derecha = Para poder colocar diferentes <div> alineados en la misma linea podemos utilizar display:inline-block o float:left o right;.
En este último caso, deberemos también definir la anchura de cada caja.
Para evitar que el <div> que sigue en el HTML al último se coloque en el hueco vacio dejado en la línea anterior utilizamos clear:both;.
width:230px;
float: left / right;
clear: both;

//Box-Sizing = Use la propiedad de tamaño de caja para mantener el ancho a 300 px, sin importar la cantidad de relleno. Esto hace que el elemento mantenga su ancho; Si aumenta el relleno, el espacio de contenido disponible disminuirá.
div {
  width: 300px;
  padding: 25px;
  box-sizing: border-box;
}

  `;

  const longitudes = `
  Longitudes Relativas
  px	Píxeles (relativo al dispositivo)
  em	Relativo al tamaño de la fuente del elemento ( 2em significa 2 veces el tamaño de la fuente actual)
  %	Porcentaje (relativo al elemento padre)
  vh y vw	Medidas relativas de acuerdo al viewport
  1vh = 1% de la altura del viewport
  100vh = altura del viewport

  Longitudes Absolutas
  in	Pulgadas (1pulgada = 2.54 cm)
  cm	Centímetros
  mm	Milímetros
  pt	Puntos (1pt = 1/72 pulgadas)
  pc	Picas (1pica = 12 puntos)

  `;

  return (
    <>
      <Accordion className={styles.acordion}>
        <Accordion.Item className={styles.item} eventKey="0">
          <Accordion.Header className={styles.acordiontitle}>
            TIPOGRAFIA CSS
          </Accordion.Header>
          <Accordion.Body className={styles.acordionbody}>
            <div className="App">
              <Code code={texto} language="css" />
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion className={styles.acordion}>
        <Accordion.Item className={styles.item} eventKey="0">
          <Accordion.Header className={styles.acordiontitle}>
            PADDING MARGIN Y POSICIONAMIENTO CSS
          </Accordion.Header>
          <Accordion.Body className={styles.acordionbody}>
            <div className="App">
              <Code code={position} language="css" />
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion className={styles.acordion}>
        <Accordion.Item className={styles.item} eventKey="0">
          <Accordion.Header className={styles.acordiontitle}>
            UNIDADES DE MEDIDA
          </Accordion.Header>
          <Accordion.Body className={styles.acordionbody}>
            <div className="App">
              <Code code={longitudes} language="css" />
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default Menucss;
