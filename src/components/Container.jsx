function Container(props) {
  // el componente añade estilos
  // el componente renderiza todo lo que reciba como children

  const containerStyles = {
    backgroundColor: "orange",
    color: "darkgray",
    padding: "20px",
    margin: "20px",
    borderRadius: "15px 0 15px 0"
  }

  return (
    <div style={containerStyles}>
      {props.children}
    </div>
  )

}


export default Container;