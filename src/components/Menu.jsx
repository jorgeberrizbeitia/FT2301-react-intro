import tequeñosImg from "../assets/tequeños.jpg";
import mondongoImg from "../assets/mondongo.jpg";
import cabelloDeAngelImg from "../assets/cabello-de-angel.webp";
import Product from "./Product";

function Menu() {
  return (
    <section id="menu" style={{ backgroundColor: "lightsalmon" }}>
      <h3>Este es el menu de día</h3>
      {/* {Product()} */}
      <Product
        productName="Tequeños"
        productImg={tequeñosImg}
        productPrice={5}
        color="yellow"
      />
      <Product
        productName="Mongongo"
        productImg={mondongoImg}
        productPrice={8}
        color="blue"
      />
      <Product
        productName="Cabello de Angel"
        productImg={cabelloDeAngelImg}
        productPrice={4}
        color="red"
      />

      {/* <div style={cardStyles}>
        <p>Plato fuerte: Mondongo</p>
        <img src={mondongoImg} width="200px"/>
        <p>Precio: 8 euros</p>
      </div> */}

      {/* <div style={cardStyles}>
        <p>Postre: Cabello de Angel</p>
        <img src={cabelloDeAngelImg} width="200px"/>
        <p>Precio: 4 euros</p>
      </div> */}
    </section>
  );
}

export default Menu;
