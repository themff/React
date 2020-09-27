import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//Vanilla
/* let elemento = document.createElement("p");
elemento.innerHTML = "Soy Jony de Berazategui";
let contenedor = document.getElementById("root");
contenedor.appendChild(elemento); */

/* /* //JSX
let elemento = <p>Hola, soy jony desde JSX</p>;
let container = document.getElementById("root");
ReactDOM.render(elemento, container); //ReactDOM.render(queRendereo,EnDondeLoRendereo) */

/* let nombre = "FK"; //increible lo facilongo que se mete después la variable en el html
let edad = 28;
let calculo = (a, b) => {
  return a + b;
};
let jsxMultiple = (
  <div>
    <h1>Soy una variable con muchos elementos</h1>
    <h3>Jsx Rules, {nombre} is in the house</h3>
    <h3>
      Tengo {edad} años, con sensación térmica de {edad + 12} jeje.
    </h3>
    <h3>Introduzco una función en el html, re loco {calculo(3, 4)}</h3>
    <p>Esto es la gloria en zapatillas</p>
  </div>
);
let container = document.getElementById("root");
ReactDOM.render(jsxMultiple, container);
 */
