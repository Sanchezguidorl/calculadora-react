import "./App.css";
import freecodelogo from "./imagenes/free-logo.png";
import Boton from "./componentes/Boton";
import Pantalla from "./componentes/Pantalla";
import BotonClear from "./componentes/BotonCrear";
import { useState } from "react";
import { evaluate } from "mathjs";
function App() {
  const [input, setInput] = useState("");

  const agregarInput = (val) => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    try {
      if (input) {
        setInput(evaluate(input));
      }
    } catch (error) {
      return false;
    }
  };

  const clearInput = () => {
    setInput("");
  };

  const inputCero = (ultCaracter, child) => {
    if (isNaN(parseInt(ultCaracter)) && isNaN(parseInt(child))) {
      agregarInput("");
    } else {
      agregarInput(child);
    }
  };

  return (
    <div className="App">
      <div className="free-logo-contenedor">
        <img
          className="free-logo"
          src={freecodelogo}
          alt="logo de freecodecamp"
        />
      </div>
      <div className="main">
        <Pantalla input={input} />
        <div className="fila">
          <Boton input={inputCero} ultimoCaracter={input[input.length - 1]}>
            7
          </Boton>
          <Boton input={inputCero} ultimoCaracter={input[input.length - 1]}>
            8
          </Boton>
          <Boton input={inputCero} ultimoCaracter={input[input.length - 1]}>
            9
          </Boton>
          <Boton input={inputCero} ultimoCaracter={input[input.length - 1]}>
            +
          </Boton>
        </div>
        <div className="fila">
          <Boton input={inputCero} ultimoCaracter={input[input.length - 1]}>
            4
          </Boton>
          <Boton input={inputCero} ultimoCaracter={input[input.length - 1]}>
            5
          </Boton>
          <Boton input={inputCero} ultimoCaracter={input[input.length - 1]}>
            6
          </Boton>
          <Boton input={inputCero} ultimoCaracter={input[input.length - 1]}>
            -
          </Boton>
        </div>
        <div className="fila">
          <Boton input={inputCero} ultimoCaracter={input[input.length - 1]}>
            1
          </Boton>
          <Boton input={inputCero} ultimoCaracter={input[input.length - 1]}>
            2
          </Boton>
          <Boton input={inputCero} ultimoCaracter={input[input.length - 1]}>
            3
          </Boton>
          <Boton input={inputCero} ultimoCaracter={input[input.length - 1]}>
            *
          </Boton>
        </div>
        <div className="fila">
          <Boton
            input={inputCero}
            ultimoCaracter={input[input.length - 1]}
            calcular={calcularResultado}
          >
            =
          </Boton>
          <Boton input={inputCero} ultimoCaracter={input[input.length - 1]}>
            0
          </Boton>
          <Boton input={inputCero} ultimoCaracter={input[input.length - 1]}>
            .
          </Boton>
          <Boton input={inputCero} ultimoCaracter={input[input.length - 1]}>
            /
          </Boton>
        </div>
        <div className="fila">
          <BotonClear clear={clearInput}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
