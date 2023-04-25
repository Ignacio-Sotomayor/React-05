import { Button,  Table } from "react-bootstrap";
import { useState } from "react";
import './App.css';

function App() {

  const [numero, setNumero] = useState(0);


  function sumar() {
    let num = numero + 1;
    setNumero(num);
  }
  function restar() {
    let num = numero - 1;
    setNumero(num);
  }

  function Contador() {
    return (
      <div>
        <p>Número aleatorio: {numero}</p>
        <Button variant="warning" onClick={restar} className="boton">Restar</Button>{''}
        <Button variant="success" onClick={sumar} className="boton" >Sumar</Button>{''}
      </div>
    );
  }

  return (
    
    <Table border={'0'} className="contenedor">
    <h1>Contador</h1>
    <Contador/>
    </Table>
    
  );
}

export default App;