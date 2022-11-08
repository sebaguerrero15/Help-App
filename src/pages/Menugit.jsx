import Accordion from 'react-bootstrap/Accordion';
import Code from "../Code";
import styles from "../pages/Menu.module.css";

function Menugit() {

  const gitInstall = `git --version
  git config --global user.name "Jonathan MirCha"
  git config --global user.email jonmircha@gmail.com
  git config --global user.ui true
  git config --global init.defaultBranch main
  git config --list
  # asignando visual studio code como editor de configuración de git
  git config --global core.editor "code --wait"
  git config --global -e
  # para estandarizar los saltos de línea en windows
  git config --global core.autocrlf true
  # para estandarizar los saltos de línea en linux/mac
  git config --global core.autocrlf input
  # ver todas las opciones de la configuración en la terminal
  git config -h
  # ver todas las opciones de la configuración en el navegador
  git help config
  `;

  const gitBasico = `# agregar los cambios de un archivo al staged
  git add archivo/directorio
  # agregar todos los cambios de todos los archivos al staged
  git add .
  
  
  # los cambios son comprometidos en el repositorio
  # debes escribir el mensaje del cambio
  # cuando se abra el archivo de configuración
  # al terminar guarda y cierra el archivo
  # para que los cambios tengan efecto
  git commit
  # es un shortcut del comando anterior
  # escribes y confirmas el mensaje del cambio en un sólo paso
  git commit -m "mensaje descriptivo del cambio"
  
  
  # se agrega el origen remoto de tu repositorio de GitHub
  git remote add origin https://github.com/usuario/repositorio.git
  # la primera vez que vinculamos el repositorio remoto con el local
  git push -u origin master
  # para las subsecuentes actualizaciones, sino cambias de rama
  git push
  
  
  #para descargar los cambios del repositorio remoto al local
  git pull
  `;

    return (
      <>
      <Accordion className={styles.acordion}>
        <Accordion.Item  className={styles.item} eventKey="0">
          <Accordion.Header className= {styles.acordiontitle} >GIT PRIMEROS PASOS</Accordion.Header>
          <Accordion.Body className={styles.acordionbody}>
           <div className="App">
            <Code code={gitInstall} language="bash" />
            </div>
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>

        <Accordion className={styles.acordion}>
        <Accordion.Item  className={styles.item} eventKey="0">
          <Accordion.Header className= {styles.acordiontitle} >FLUJO BASICO DE GIT Y GITHUB</Accordion.Header>
          <Accordion.Body className={styles.acordionbody}>
          <div className="App">
            <Code code={gitBasico} language="bash" />
            </div>
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        </>
  );
}

export default Menugit;