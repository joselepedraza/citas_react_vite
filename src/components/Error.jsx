
//PRIMERA FORMA DE ENVIAR PROPS (+COMUN)
/*
const Error = ({mensaje}) => {
  return (
    <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md">
        <p>{mensaje}</p>
    </div>
  )
}

export default Error
*/

//SEGUNDA FORMA DE ENVIAR PROPS, CON CHILDREN (hace referencia a todo lo que se le pase a un componente, incluido contenido html)
const Error = ({children}) => {
    return (
      <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md">
          {children}
      </div>
    )
  }
  
  export default Error
  