

function Product(props) {

  console.log(props)
  const { color, productImg, productName, productPrice } = props

  const cardStyles = {
    backgroundColor: color,
    color: "white",
    padding: "10px",
    margin: "20px",
    borderRadius: "20px"
  }

  return (
      <div style={cardStyles}>
        <p>Entrada: {productName}</p>
        <img src={productImg} width="200px"/>
        <p>Precio: {productPrice} euros</p>
      </div>
  )

}

export default Product;