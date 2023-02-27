import logo from './logo.svg';
import './App.css';
import tequeñosImg from "./assets/tequeños.jpg"
import mondongoImg from "./assets/mondongo.jpg"
import cabelloDeAngelImg from "./assets/cabello-de-angel.webp"

function App() {

  const cardStyles = {
    backgroundColor: "darkgray",
    color: "white",
    padding: "10px",
    margin: "20px",
    borderRadius: "20px"
  }


  return (
    <div className="App">
        
      <section id="title">
        <h1>Bienvenidos a mi Restaurant</h1>
        <h3>El Patacón de Oro</h3>
        <p>Lo mejor de la comida venezolana</p>
      </section>

      <section id="menu" style={{backgroundColor: 'lightsalmon'}}>

        <h3>Este es el menu de día</h3>

        <div style={cardStyles} className="menu-starter">
          <p>Entrada: Tequeños</p>
          <img src={tequeñosImg} width="200px"/>
          <p>Precio: 5 euros</p>
        </div>

        <div style={cardStyles}>
          <p>Plato fuerte: Mondongo</p>
          <img src={mondongoImg} width="200px"/>
          <p>Precio: 8 euros</p>
        </div>

        <div style={cardStyles}>
          <p>Postre: Cabello de Angel</p>
          <img src={cabelloDeAngelImg} width="200px"/>
          <p>Precio: 4 euros</p>
        </div>

      </section>

    </div>
  );
}

export default App;
