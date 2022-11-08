import Accordion from 'react-bootstrap/Accordion';
import Code from "../Code";
import styles from "../pages/Menu.module.css";

function Menujs() {

  const Funcion = `function Hello() {
    return "Hello"
  }
  
  console.log(Hello())
  `;

  const Parametros = `
  function sayHello(name) {
    return 'Hi I am ' + name
  }
  
  console.log(sayHello('Ryan'))
  console.log(sayHello('Jane'))
  console.log(sayHello('Joe'))
  `;

  const Parametros2 = `
  function add(x, y=0) {
    return x + y;
  }
  
  console.log(add(10, 20));
  console.log(add(10));
  `;

  

  const FuncionFlecha = `
  const add = (x, y) => {
    return x + y;
  }
  `;

  const FuncionFlecha2 = `
  const button = document.createElement("button");
    button.innerText = "Click me";

    button.addEventListener("click", () => alert("Clicked!"));

    document.body.append(button);
  `;

  const FuncionFlecha3 = `
const showText = () => "Hola Mundo";
const showNumber = () => 22;
const showBoolean = () => true;
const showArray = () => [1, 2, 3];
const showFunction = () => () => 'Hola desde funcion'
const showObject = () => ({
  name: "Ryan",
});

console.log(showText());
console.log(showNumber());
console.log(showBoolean());
console.log(showArray());
console.log(showFunction()());
console.log(showObject());
  `;

  const FuncionAnonima = `
  const button = document.createElement('button')
    button.innerText = 'Click me'

    button.addEventListener('click', function () {
    alert('Clicked!')
})

document.body.append(button)
  `;

  const Objeto = `const user = {
    name: 'Maria',
    lastname: 'Perez',
    age: 30,
    address: {
      country: 'Colombia',
      city: 'bogota',
      street: 'Main Street #123'
    },
    friends: ['Brandon Perez', 'Elena Gomez'],
    active: true,
    sendMail: function () {
      return 'Sending email'
    }
  }
  
  console.log(user.name)
  console.log(user.age)
  console.log(user.sendMail())
  `;

  const Shorthand =  `
  const name = "laptop";
  const price = 3000;

  const newProduct = {
    name,
    price,
};

    console.log(newProduct)
  `;

  const Condicional =  `
  const button = document.createElement("button");
      button.innerText = 'Profile'

  const isAuthorized = true;
      button.addEventListener("click", () => {
        if (isAuthorized) {
          return alert("Autorizado");
        }

      alert("No Autorizado");
      });

  `;

  const String =  `
  let color = 'white'
  let background = 'red'
  
  const button = document.createElement("button");
  button.innerText = "active";
  
  button.style = 'background: $ {background}; color: $ {color};'
  
  document.body.append(button);
  `;

  const ObjetoConstructor =  `function Casa(precio,ubicacion,recamaras,baños){
    this.precio = precio;
    this.ubicacion = ubicacion;
    this.recamaras = recamaras;
    this.baños = baños;
}

const casa1 = new Casa(1000000,'Mexico Norte',5,2);
const casa2 = new Casa(2000000,'Mexico Sur',4,1);
console.log('Precio de la casa1 = $$ {casa1.precio}');
console.log('Precio de la casa2 = $$ {casa2.precio}');
  `;

  const Destructuring =  `
  function printInfo({ age }) {
    return "<h1> Hi I am " + age + "</h1>";
  }
  `;

  const Destructuring2 =  `
  function printInfo(user) {
    const { age } = user
    return "<h1> Hi I am " + age + "</h1>";
  }
  `;

  const ObjectEnhacement =  `const licenciatura = 'Ingeniero en Computacion';
  const semestre = 3;
  const promedio = 83; 
  
  const alumno = {licenciatura,semestre,promedio}
  
  console.log(alumno);
  `;

  const FuncionesObject =  `const consola = {
    fabricante:'Nintendo',
    modelo:'Nintendo Switch 1.0',
    banearConsola(){
        console.log('Escanenando Sistema...
        Hacks enconstrados...
        Lo sinto $ {this.dueno}, pero tu consola estara
        baneada por infringir los terminos y condiciones');
    },
    dueno:'Jose Luis'
}

consola.banearConsola();
  `;

  const Map =  `const names = [ 'ryan', 'joe', 'bruce' ]

  const greetings = names.map(function (name) {
      return "Hola " + name
  })
  
  console.log(names)
  console.log(greetings)
  `;

  const ObjectKey =  `const pelicula = {
    titulo:'Crank: Alto Voltaje',
    actores: ['Jashon Stathamn','...'],
    genero:'Accion'
}

console.log(Object.keys(pelicula));
  `;

  const SpreadOperator =  `
  const names = ["ryan", "joe", "bruce"];
  const newNames = ['Maria', 'Marta', 'Veronica']
  
  const allNames = [...names, ...newNames]
  
  console.log(names)
  console.log(newNames)
  console.log(allNames)
  `;

  const SpreadOperator2 =  `
  const user = {
    name: 'ryan',
    lastname: 'ray'
}

const address = {
    street: 'Main Street 123',
    city: 'London'
}

const userInfo = {
    ...user,
    address
}

console.log(userInfo)
  `;

  const Filter =  `const names = ["ryan", "joe", "bruce"];

  const newNames = names.filter(function (name) {
      if (name !== "joe") return name
  })
  
  console.log(names)
  console.log(newNames);
  `;

  const Find =  `const names = ["ryan", "joe", "bruce"];

  const nameFound = names.find(function (name) {
    if (name === "joe") {
      return name;
    }
  });
  
  console.log(names)
  console.log(nameFound);
  `;

  const Concat =  `const names = ["ryan", "joe", "bruce"];
  const newNames = ["Maria", "Marta", "Veronica"];
  
  const allNames = names.concat(newNames);
  
  console.log(names);
  console.log(newNames);
  console.log(allNames);
  `;

  const Oternario =  `
  let puntaje = 5;
  alert ( puntaje >= 6 ? 'Pasaste' : 'Fallaste' );
  `;

  const Optional =  `
  const person = {
    name: 'Gerardo', 
    email: 'mail@mail.com', 
    currentJob: null;
  }
  const jobTitle = person?.currentJob?.title // undefined

  `;


  const Reduce =  `const reducido = [5,2,7,1].reduce((acumulador,elemento)=>{ return acumulador+elemento;},3);

  console.log(reducido);
  `;

  const Promesa =  `function suma (numero){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(numero+48);
        }, 2000);
    })
}
  `;

  const Async =  `async function tareaAsincrona(){
    try {
        let paso1 = await suma(3);
        console.log(paso1 + 2);
    } catch (e) {
        console.log(e);
    }
}
  `;

  const Poo =  `class Animal{
    constructor(tipo,tamano,habitat){
        this.tipo = tipo
        this.tamano = tamano
        this.habitat = habitat
    }
    comer(){
        console.log('Ñom ñom ñom')
    }
}

class Perro extends Animal{
    constructor(tipo,tamano,habitat,raza){
        super(tipo,tamano,habitat)
        this.raza = raza
    }
    ladrar(){
        console.log('GUA GUA GUA!!! Soy un $ {this.raza}'')
    }
}

let perro = new Perro('Canino','Grande','Ciudad','Chihuahua')
perro.ladrar();
  `;

  const Getter =  `class Animal{
    //ALGUN CODIGO
}

class Perro extends Animal{
    constructor(tipo,tamano,habitat,raza){
        //ALGUN CODIGO
    }
    get ladrar(){
        if(this.tamano == 'Grande')
        return 'GUA GUA GUA!!! Soy un $ {this.raza} y ladro fuerte'
        else{
            return 'gua gua. Soy un $ {this.raza} y ladro bajito'
        }
    }
}

let mazapan = new Perro('Canino','Pequeño','Ciudad','Chihuahua')
console.log(mazapan.ladrar);
  `;

  const Setter =  `class Animal{
    //ALGUN CODIGO
}

class Perro extends Animal{
    constructor(tipo,tamano,habitat,raza){
        super(tipo,tamano,habitat)
        this.raza = raza
    }
    get ladrar(){
        if(this.tamano == 'Grande')
        return 'GUA GUA GUA!!! Soy un $ {this.raza} y ladro fuerte'
        else{
            return 'gua gua. Soy un $ {this.raza} y ladro bajito'
        }
    }

    set setearTamano(valor){
        this.tamano = valor;
    }

}
  `;

  const Static =  `class Animal{
    constructor(tipo,tamano,habitat){
        //CODIGO
    }

    static dormir(){
        return 'Zzzzz.... zzz.... zz..'
    }
}
  `;
 
    return (
      <>
      <Accordion className={styles.acordion}>
        <Accordion.Item  className={styles.item} eventKey="0">
          <Accordion.Header className= {styles.acordiontitle} >FUNCION</Accordion.Header>
          <Accordion.Body className={styles.acordionbody}>
          <p>Una de la sintaxis que mas se va a repetir en React es la creacion de funciones de Javascript. Asi que Debes tener muy claro que es una funcion y como crearla.
          Las funciones nos permiten agrupar logica bajo un nombre, y nos permiten poder reutilizarlos facilmente. Las funciones tambien pueden devolver distintos tipos de datos, como strings, numeros, booleanos, arreglos, objetos e incluso otras funciones.
          </p>
          <div className="App">
            <Code code={Funcion} language="javascript" />
           </div>
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>

        <Accordion className={styles.acordion}>
        <Accordion.Item  className={styles.item} eventKey="0">
          <Accordion.Header className= {styles.acordiontitle} > PARAMETROS FUNCIONES</Accordion.Header>
          <Accordion.Body className={styles.acordionbody}>
          <p>Cuando declaramos funciones muchas veces vamos a querer procesar datos, asi que para esto estan los parametros. Los parametros de la funciones solo son los nombres que le decimos que podemos esperar en la declaracion de la funcion.
          </p>
          <div className="App">
            <Code code={Parametros} language="javascript" />
           </div>
           <p><h2>Parametros opcionales</h2>
            Si en una funcion esperamos valores para que funcione, ?que pasa si no nos pasan estos valores?

            Bueno, podemos hacer una validacion, y asignar un valor:</p>
           <div className="App">
            <Code code={Parametros2} language="javascript" />
           </div>
           <p>Esto es mucho mas facil de escribir, de leer, y evitamos usar una condicional extra.</p>
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>

        <Accordion className={styles.acordion}>
        <Accordion.Item  className={styles.item} eventKey="0">
          <Accordion.Header className= {styles.acordiontitle} >FUNCIONES FLECHA</Accordion.Header>
          <Accordion.Body className={styles.acordionbody}>
            <p>En javascript tenemos dos tipos de funciones:
              <li>Function declaration, las que usan la palabra function</li>
              <li>Arrow Functions o funciones flechas ambas son usadas en React.</li>
              Arrow Function en Javascript:</p>
          <div className="App">
            <Code code={FuncionFlecha} language="javascript" />
           </div>
           <p>Estos Arrow functions son muy utiles para poder escribir codigo mas compacto y facil de leer.</p>
           <div className="App">
            <Code code={FuncionFlecha2} language="javascript" />
           </div>
           <p><h2>Arrow Functiones en una Sola Linea</h2>
              Es muy importante tener en claro que cuando usamos un Arrow function sin las llaves, este ya tiene un return implicito, asi que es como si la funcion retornara algo.
              Por ejemplo todas estas funciones retornan algo:</p>
           <div className="App">
            <Code code={FuncionFlecha3} language="javascript" />
           </div>
           <p>Algo interesante con la ultimas funcion showObject es que no se ha podido colocar en una sola linea. Esto es asi porque las llaves definen el cuerpo de una funcion, asi que cuando quiero decirle que retorno un objeto () =&gt {} lo que el entiende es que quiero colocar el cuerpo de la funcion.
           Usando los parentesis estamos declarando que el cuerpo de la funcion, sino un tipo de dato, que debe retornar.
           </p>
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>

        <Accordion className={styles.acordion}>
        <Accordion.Item  className={styles.item} eventKey="0">
          <Accordion.Header className= {styles.acordiontitle} >FUNCIONES ANÓNIMAS</Accordion.Header>
          <Accordion.Body className={styles.acordionbody}>
            <p>En JavaScript muchas veces no es necesario asignar nombres a las funciones.Esto hace que no tenga que nombrar la funcion por aparte. Esto es muy util cuando ejecutamos funciones en eventos como clicks, submits, change, y otros eventos de elementos HTML.</p>
          <div className="App">
            <Code code={FuncionAnonima} language="javascript" />
           </div>
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>

        <Accordion className={styles.acordion}>
        <Accordion.Item  className={styles.item} eventKey="0">
          <Accordion.Header className= {styles.acordiontitle} >OBJETO</Accordion.Header>
          <Accordion.Body className={styles.acordionbody}>
            <p>Estos pueden almacenar distintos tipos de datos como strings, numeros, booleanos, funciones, arreglos y demas.</p>
          <div className="App">
            <Code code={Objeto} language="javascript" />
           </div>
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>

        <Accordion className={styles.acordion}>
        <Accordion.Item  className={styles.item} eventKey="0">
          <Accordion.Header className= {styles.acordiontitle} >SHORTHAND PROPERTY NAMES</Accordion.Header>
          <Accordion.Body className={styles.acordionbody}>
            <p>Muchas veces tambien vamos a necesitar crear objetos de Javascript, a partir de otros datos:</p>
          <div className="App">
            <Code code={Shorthand} language="javascript" />
           </div>
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>

        <Accordion className={styles.acordion}>
        <Accordion.Item  className={styles.item} eventKey="0">
          <Accordion.Header className= {styles.acordiontitle} >OBJETO CONSTRUCTOR</Accordion.Header>
          <Accordion.Body className={styles.acordionbody}>
          <div className="App">
            <Code code={ObjetoConstructor} language="javascript" />
           </div>
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>

        <Accordion className={styles.acordion}>
        <Accordion.Item  className={styles.item} eventKey="0">
          <Accordion.Header className= {styles.acordiontitle} >DESTRUCTURING</Accordion.Header>
          <Accordion.Body className={styles.acordionbody}>
            <p>El destructuring de Javascript nos permite usar solo algunos valores de un Objeto.</p>
          <div className="App">
            <Code code={Destructuring} language="javascript" />
           </div>
           <p>Tambien puedes destructurar desde cualquier parte del codigo, en este ejemplo dentro de la funcion:</p>
           <div className="App">
            <Code code={Destructuring2} language="javascript" />
           </div>
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>

        <Accordion className={styles.acordion}>
        <Accordion.Item  className={styles.item} eventKey="0">
          <Accordion.Header className= {styles.acordiontitle} >OBJECT ENHACEMENT</Accordion.Header>
          <Accordion.Body className={styles.acordionbody}>
          <div className="App">
            <Code code={ObjectEnhacement} language="javascript" />
           </div>
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>

        <Accordion className={styles.acordion}>
        <Accordion.Item  className={styles.item} eventKey="0">
          <Accordion.Header className= {styles.acordiontitle} >FUNCIONES DENTRO DE UN OBJETO</Accordion.Header>
          <Accordion.Body className={styles.acordionbody}>
          <div className="App">
            <Code code={FuncionesObject} language="javascript" />
           </div>
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>

        <Accordion className={styles.acordion}>
        <Accordion.Item  className={styles.item} eventKey="0">
          <Accordion.Header className= {styles.acordiontitle} >CONDICIONALES EN FUNCIONES</Accordion.Header>
          <Accordion.Body className={styles.acordionbody}>
          <div className="App">
            <Code code={Condicional} language="javascript" />
           </div>
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>

        <Accordion className={styles.acordion}>
        <Accordion.Item  className={styles.item} eventKey="0">
          <Accordion.Header className= {styles.acordiontitle} >STRING LITERALS</Accordion.Header>
          <Accordion.Body className={styles.acordionbody}>
          <div className="App">
            <p>Los String Literals sirven para añadir un propiedades dinamicas a un componente, como clases o estilos:</p>
            <Code code={String} language="javascript" />
           </div>
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>

        <Accordion className={styles.acordion}>
        <Accordion.Item  className={styles.item} eventKey="0">
          <Accordion.Header className= {styles.acordiontitle} >.MAP</Accordion.Header>
          <Accordion.Body className={styles.acordionbody}>
          <div className="App">
            <Code code={Map} language="javascript" />
           </div>
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>

        <Accordion className={styles.acordion}>
        <Accordion.Item  className={styles.item} eventKey="0">
          <Accordion.Header className= {styles.acordiontitle} >OBJECT KEY</Accordion.Header>
          <Accordion.Body className={styles.acordionbody}>
          <div className="App">
            <Code code={ObjectKey} language="javascript" />
           </div>
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>


        <Accordion className={styles.acordion}>
        <Accordion.Item  className={styles.item} eventKey="0">
          <Accordion.Header className= {styles.acordiontitle} >.FILTER</Accordion.Header>
          <Accordion.Body className={styles.acordionbody}>
            <p>El metodo filter nos permite crear un nuevo array, con elementos que hayan cumplido con una condicion.</p>
          <div className="App">
            <Code code={Filter} language="javascript" />
           </div>
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>

        <Accordion className={styles.acordion}>
        <Accordion.Item  className={styles.item} eventKey="0">
          <Accordion.Header className= {styles.acordiontitle} >.FIND</Accordion.Header>
          <Accordion.Body className={styles.acordionbody}>
            <p>El metodo find nos permite buscar un elemento de un arreglo, si encuentra el elemento lo retorna, sino nos devuelve undefined.</p>
          <div className="App">
            <Code code={Find} language="javascript" />
           </div>
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>

        <Accordion className={styles.acordion}>
        <Accordion.Item  className={styles.item} eventKey="0">
          <Accordion.Header className= {styles.acordiontitle} >.CONCAT</Accordion.Header>
          <Accordion.Body className={styles.acordionbody}>
            <p>El metodo find nos permite buscar un elemento de un arreglo, si encuentra el elemento lo retorna, sino nos devuelve undefined.</p>
          <div className="App">
            <Code code={Concat} language="javascript" />
           </div>
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>

        <Accordion className={styles.acordion}>
        <Accordion.Item  className={styles.item} eventKey="0">
          <Accordion.Header className= {styles.acordiontitle} >SPREAD OPERATOR</Accordion.Header>
          <Accordion.Body className={styles.acordionbody}>
            <p>En la seccion anterior hemos visto que es posible combinar dos arreglos en uno solo usando contact, pero esto puede ser mucho mas facil usando el spreed operator.</p>
          <div className="App">
            <Code code={SpreadOperator} language="javascript" />
           </div>
           <p><h2>Copiar propiedades en un nuevo Objeto</h2>
            El spreed operator tambien funciona con objetos de Javascript:</p>
           <div className="App">
            <Code code={SpreadOperator2} language="javascript" />
           </div>
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>

        <Accordion className={styles.acordion}>
        <Accordion.Item  className={styles.item} eventKey="0">
          <Accordion.Header className= {styles.acordiontitle} >.REDUCE</Accordion.Header>
          <Accordion.Body className={styles.acordionbody}>
          <div className="App">
            <Code code={Reduce} language="javascript" />
           </div>
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>

        <Accordion className={styles.acordion}>
        <Accordion.Item  className={styles.item} eventKey="0">
          <Accordion.Header className= {styles.acordiontitle} >OPERADOR TERNARIO</Accordion.Header>
          <Accordion.Body className={styles.acordionbody}>
            <p>El operador ternario lo podemos entender como una estructura compacta para hacer condicionales. Consiste en una expresión que se evaluará y, dependiendo de si dicha evaluación fue positiva o negativa devolverá una u otra cosa.</p>
          <div className="App">
            <Code code={Oternario} language="javascript" />
           </div>
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>

        <Accordion className={styles.acordion}>
        <Accordion.Item  className={styles.item} eventKey="0">
          <Accordion.Header className= {styles.acordiontitle} >OPTIONAL CHAINING</Accordion.Header>
          <Accordion.Body className={styles.acordionbody}>
            <p>Ete permiten leer el valor de una propiedad anidada sin tener que revisar si el valor previo es valido.</p>
          <div className="App">
            <Code code={Optional} language="javascript" />
           </div>
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>

        <Accordion className={styles.acordion}>
        <Accordion.Item  className={styles.item} eventKey="0">
          <Accordion.Header className= {styles.acordiontitle} >PROMESAS</Accordion.Header>
          <Accordion.Body className={styles.acordionbody}>
          <div className="App">
            <Code code={Promesa} language="javascript" />
           </div>
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>

        <Accordion className={styles.acordion}>
        <Accordion.Item  className={styles.item} eventKey="0">
          <Accordion.Header className= {styles.acordiontitle} >ASYNC/AWAIT</Accordion.Header>
          <Accordion.Body className={styles.acordionbody}>
          <div className="App">
            <Code code={Async} language="javascript" />
           </div>
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>

        <Accordion className={styles.acordion}>
        <Accordion.Item  className={styles.item} eventKey="0">
          <Accordion.Header className= {styles.acordiontitle} >POO</Accordion.Header>
          <Accordion.Body className={styles.acordionbody}>
          <div className="App">
            <Code code={Poo} language="javascript" />
           </div>
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>

        <Accordion className={styles.acordion}>
        <Accordion.Item  className={styles.item} eventKey="0">
          <Accordion.Header className= {styles.acordiontitle} >GETTER</Accordion.Header>
          <Accordion.Body className={styles.acordionbody}>
          <div className="App">
            <Code code={Getter} language="javascript" />
           </div>
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>

        <Accordion className={styles.acordion}>
        <Accordion.Item  className={styles.item} eventKey="0">
          <Accordion.Header className= {styles.acordiontitle} >SETTER</Accordion.Header>
          <Accordion.Body className={styles.acordionbody}>
          <div className="App">
            <Code code={Setter} language="javascript" />
           </div>
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>

        <Accordion className={styles.acordion}>
        <Accordion.Item  className={styles.item} eventKey="0">
          <Accordion.Header className= {styles.acordiontitle} >STATIC</Accordion.Header>
          <Accordion.Body className={styles.acordionbody}>
          <div className="App">
            <Code code={Static} language="javascript" />
           </div>
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        </>
  );
}

export default Menujs;