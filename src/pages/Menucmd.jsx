import Accordion from 'react-bootstrap/Accordion';
import Code from "../Code";
import styles from "../pages/Menu.module.css";

function Menucmd() {

  const cmd = `
  CD
  Este comando es uno de los más usados en el Símbolo del sistema. CD sirve para cambiar de directorio y para mostrar el directorio actual. Si escribes CD .. (dos puntos) específicas que quieres ir al directorio superior. Para ir a una ruta exacta hay que introducir CD [/D] [unidad:][ruta].
  
  CLS
  El comando CLS (clear screen) sirve para borrar la pantalla del Símbolo del sistema.
  
  DEL
  Para eliminar uno o más archivos hay que usar el comando DEL. Este comando cuenta con varios valores muy interesantes.
  
  DATE
  Si quieres cambiar la fecha solo tienes que introducir el comando DATE y, seguidamente, te pedirá el día, mes y año.
  
  COLOR
  Para cambiar los colores predeterminados de la consola de Windows hay que usar el comando COLOR.
  •	COLOR [attr]
  Attr corresponde al valor del color. Estos son los valores:
  •	0 = negro
  •	1 = azul
  •	2 = verde
  •	3 = aguamarina
  •	4 = rojo
  •	5 = púrpura
  •	6 = amarillo
  •	7 = blanco
  •	8 = gris
  •	9 = azul claro
  •	A = verde claro
  •	B = aguamarina claro
  •	C = rojo claro
  •	D = púrpura claro
  •	E = amarillo claro
  •	F = blanco brillante
  
  MKDIR
  Al igual que MD, con MKDIR puedes crear un directorio.
  •	MKDIR [unidad:]ruta
  
  RD
  Si quieres eliminar un directorio solo tienes que usar el comando RD. Sin embargo, también puedes hacerlo con el RMDIR.
  •	RMDIR [/S] [/Q] [unidad:]ruta
  •	RD [/S] [/Q] [unidad:]ruta
  El parámetro /S elimina todos los directorios y archivos del directorio, además del mismo directorio. Si añades /Q, entonces pide confirmación para quitar un árbol de directorio.
  
  MOVE
  Pasamos a un comando muy útil para el día a día. Si tienes que mover archivos o cambiar el nombre a archivos y directorios, puedes usar MOVE.
  Para Mover uno o más archivos:
  •	MOVE [/Y | /-Y] [unidad:][ruta]nombrearchivo1[,...] destino
  Para cambiar el nombre a un directorio:
  •	MOVE [/Y | /-Y] [unidad:][ruta]nombredirectorio1 nombredirectorio2
  
  RENAME
  Al igual que REN, RENAME cambiar el nombre de uno o más archivos.
  •	RENAME [unidad:][ruta]archivo1 archivo2
  
  REPLACE
  Reemplazar archivos es posible vía Símbolo del sistema mediante el uso del comando REPLACE.
  •	REPLACE [unidad1:][ruta1]archivo [unidad2:][ruta2] [/A] [/P] [/R]
  
  https://www.mundodeportivo.com/urbantecno/windows/todos-comandos-cmd-de-windows-lista-completa
  
  `;

    return (
      <>
      <Accordion className={styles.acordion}>
        <Accordion.Item  className={styles.item} eventKey="0">
          <Accordion.Header className= {styles.acordiontitle} >COMANDOS BÁSICOS CMD</Accordion.Header>
          <Accordion.Body className={styles.acordionbody}>
          <div className="App">
            <Code code={cmd} language="bash" />
            </div>
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        </>
  );
}

export default Menucmd;