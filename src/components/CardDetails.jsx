

function CardDetails(props) {

  console.log(props)

  return (
    <>
      <h3>Nombre: {props.user.name}</h3>
      <p>Profesión: {props.user.profession}</p>
    </>
  )

  // Fragmentos de React => <> </>
}

export default CardDetails;