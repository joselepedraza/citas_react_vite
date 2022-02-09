
import Paciente from './Paciente';


const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
  
  //console.log(pacientes); //comprobamos que nos trae correctamente la info del prop para posteriormente iterar (MAP siempre) sobre la misma

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      
      {pacientes && pacientes.length ? (

        <>
          <h2 className="font-black text-3xl text-center"> Listado Pacientes </h2>
          
          <p className="text-lg mt-5 mb-10 text-center">
            Administra tus {''}
            <span className="text-indigo-600 font-bold">Pacientes y citas</span>
          </p>
        </>

      ) : (

        <>
          <h2 className="font-black text-3xl text-center"> No hay pacientes </h2>
          
          <p className="text-lg mt-5 mb-10 text-center">
            Empieza agregando pacientes {''}
            <span className="text-indigo-600 font-bold"> para que aparezcan en este lugar</span>
          </p>
        </>

      )}
      
      
      {
      
      //GENERAMOS EL MISMO NUMERO DE COMPONENTES COMO PACIENTES TIENE EL SISTEMA 
      //Y LE PASAMOS POR PROPS AL COMPONENTE PACIENTE LOS DATOS DE LOS PACIENTES
      /* 
      pacientes.map( (paciente) => {
        //Si codigo aqui, entonces: (si no, sin return)
        return(
          <h1>desde map</h1>
        )
      })
      */
     //DEBEMOS TENER UN KEY UNICO (aunque la siguiente forma es una mala practica, debemos mantener key!=index)
     /* 
     pacientes.map( (paciente, index) => 
        (
          <Paciente 
            key={index}
            paciente={paciente}          
          />
        )
      )*/
      
      pacientes.map( (paciente) => 
        (
          <Paciente 
            key={paciente.id}
            paciente={paciente}         
            
            setPaciente={setPaciente}
            
            eliminarPaciente={eliminarPaciente}
          />
        )
      )
    }


      
   
    </div>

  )
}

export default ListadoPacientes;
