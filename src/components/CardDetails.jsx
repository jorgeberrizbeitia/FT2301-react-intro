function CardDetails(props) {

  console.log(props)

  return (
    <div>
      <h3>Nombre: {props.user.name}</h3>
      <p>Profesión: {props.user.profession}</p>
    </div>
  )

}

export default CardDetails;