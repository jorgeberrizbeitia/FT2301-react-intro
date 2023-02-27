function Message(props) {

  console.log(props)
  const {children, color, num} = props
  // props.children es TODO lo que haya entre la etiqueta que abre y cierra de la invocacion del componente


  return (
    <div style={{color: color}}>
      <h3>{num}: {children}</h3>
    </div>
  )
}


export default Message; 