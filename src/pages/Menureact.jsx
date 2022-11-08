import Accordion from "react-bootstrap/Accordion";
import Code from "../Code";
import styles from "../pages/Menu.module.css";

function Menureact() {
  const useState = `import React, { useState } from "react";

  export default function Componente() {
    const [valor, setValor] = useState(0);
      return (
      <div>
        <span>El valor del componente es {valor}</span>
        <button onClick={() => setValor(valor + 1)}>Aumentar valor</button>
      </div>
    );
  }
  
  `;

  const useEffect = `
  import React, { useState } from "react";

  export default function Componente() {
    const [valor, setValor] = useState(0);
      return (
      <div>
        <span>El valor del componente es {valor}</span>
        <button onClick={() => setValor(valor + 1)}>Aumentar valor</button>
      </div>
    );
  }

  `;

  const renderMap = `
  function ReptileList() {
    const reptiles = ['alligator', 'snake', 'lizard'];
  
    return (
      <ol>
        {reptiles.map(reptile => (
          <li key={reptile}>{reptile}</li>
        ))}
      </ol>
    );
  }

  `;

  const renderFind = `
  function ReptileList() {
    const reptiles = ['alligator', 'snake', 'lizard'];
  
    return (
      <ol>
        {reptiles.map(reptile => (
          <li key={reptile}>{reptile}</li>
        ))}
      </ol>
    );
  }

  `;

  const renderFilter = `
  import React from 'react';

const people = [
  {
    name: 'James',
    age: 31,
  },
  {
    name: 'John',
    age: 45,
  },
  {
    name: 'Paul',
    age: 65,
  },
  {
    name: 'Ringo',
    age: 49,
  },
  {
    name: 'George',
    age: 34,
  }
];

function App() {
  return (
    <div>
      {people.filter(person => person.age < 60).map(filteredPerson => (
        <li>
          {filteredPerson.name}
        </li>
      ))}
    </div>
  );
}

export default App;

  `;

  const renderReduce = `
  function ReptileList() {
    const reptiles = ['alligator', 'snake', 'lizard'];
  
    return (
      <ol>
        {reptiles.map(reptile => (
          <li key={reptile}>{reptile}</li>
        ))}
      </ol>
    );
  }

  `;

  const fetchApi = `
  import { useState, useEffect } from 'react';

  function App() {
  
    const [articulos, setArticulos] = useState([])
    const [recuperado, setRecuperado] = useState(false)
  
  
    function mostrarTabla() {
      return (
        <div>
          <table border="1">
            <thead>
              <tr>
                <th>Código</th>
                <th>Descripción</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              {articulos.map(art => {
                return (
                  <tr key={art.codigo}>
                    <td>{art.codigo}</td>
                    <td>{art.descripcion}</td>
                    <td>{art.precio}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    }
  
    useEffect(() => {
      fetch('https://scratchya.com.ar/react/datos.php')
        .then((response) => {
          return response.json()
        })
        .then((articulos) => {
          setArticulos(articulos)
          setRecuperado(true)
        })
    }, [])
  
    if (recuperado)
      return mostrarTabla()
    else
      return (<div>recuperando datos...</div>)
  }
  
  export default App

  `;


  return (
    <>
      <Accordion className={styles.acordion}>
        <Accordion.Item className={styles.item} eventKey="0">
          <Accordion.Header className={styles.acordiontitle}>
            HOOK USESTATE
          </Accordion.Header>
          <Accordion.Body className={styles.acordionbody}>
            <div className="App">
              <Code code={useState} language="javascript" />
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion className={styles.acordion}>
        <Accordion.Item className={styles.item} eventKey="0">
          <Accordion.Header className={styles.acordiontitle}>
            HOOK USEEFFECT
          </Accordion.Header>
          <Accordion.Body className={styles.acordionbody}>
            <div className="App">
              <Code code={useEffect} language="javascript" />
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion className={styles.acordion}>
        <Accordion.Item className={styles.item} eventKey="0">
          <Accordion.Header className={styles.acordiontitle}>
            RECORRER ARRAYS EN REACT
          </Accordion.Header>
          <Accordion.Body className={styles.acordionbody}>
            <p><h2>MAP</h2>
            El método map, lo utilizamos cuando queremos transformar un arreglo, pero persistiendo el arreglo original, dicho en otras palabras ejecuta una función dada en cada elemento del arreglo actual y crea un nuevo arreglo con el resultado de la función dada.</p>
            <div className="App">
              <Code code={renderMap} language="javascript" />
            </div>
            <p><h2>FILTER</h2>
            El método filter crea un nuevo arreglo con todos los elementos que cumplan la condición dada, dicho en otras palabras, cuando iteramos un arreglo y queremos seleccionar cada el elemento que cumpla con la condición dada.</p>
            <div className="App">
              <Code code={renderFilter} language="javascript" />
            </div>
            <p><h2>FIND</h2>
            Como su nombre indica, busca un elemento dentro de un array y retorna el primero que cumpla con la condición especificada en la función callback.</p>
            <div className="App">
              <Code code={renderFind} language="javascript" />
            </div>
            <p><h2>REDUCE</h2>
            El método reduce también ejecuta una devolución de llamada para que elemento del arreglo, pero como su nombre lo dice reduce a un solo valor el arreglo (puede ser un objeto, string, número, etc.)</p>
            <div className="App">
              <Code code={renderReduce} language="javascript" />
            </div>
            <p><h2>SOME</h2></p>
            <div className="App">
              <Code code={renderReduce} language="javascript" />
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion className={styles.acordion}>
        <Accordion.Item className={styles.item} eventKey="0">
          <Accordion.Header className={styles.acordiontitle}>
            FETCH API
          </Accordion.Header>
          <Accordion.Body className={styles.acordionbody}>
            <p>Cuando necesitamos hacer peticiones a un servidor web podemos utilizar el API fetch de Javascript. Nos permite obtener en forma asíncrona recursos de un servidor web.</p>
            <div className="App">
              <Code code={fetchApi} language="javascript" />
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default Menureact;
