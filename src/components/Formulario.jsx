//rfce + tab:
/*
import React from 'react'

function Formulario() {
  return (
    <div>
      
    </div>
  )
}

export default Formulario
*/

//Arrow function Component: rafce + tab:

import { useState, useEffect } from 'react'; //importamos los Hooks

import Error from './Error';

const Formulario = ({pacientes, setPacientes, paciente, setPaciente }) => {
  //DEFINIMOS EL ESTADO DE ESTE COMPONENTE:
  // -siempre justo despues de crear la funcion del componente
  // -nunca dentro de un if ni después de algún return (no pueden existir return previos)
  /*const {cliente, setCliente} = useState({}); //{variable de estado del cliente, modificador} inicializadas al objeto vacio de useState
  //IMPORTANTE: Siempre modificar la variable del lado izq con la funcion del lado drcho, NUNCA HACERLO POR ASIGNACIÓN
  
  const {total, setTotal} = useState(0);
  const {clientes, setClientes} = useState([]);
  const {modal, setModal} = useState(false);
  */

  const [nombre,setNombre] = useState('');
  const [propietario,setPropietario] = useState('');
  const [email,setEmail] = useState('');
  const [fecha,setFecha] = useState('');
  const [sintomas,setSintomas] = useState('');

  const [error, setError] = useState(false); //para la validacion

  //USO1 useEffect: PARA ESCUCHAR LOS CAMBIOS QUE SUCEDAN EN ALGUNA PARTE DEL STATE
  /*useEffect( () => {  //mostrará el paciente por consola únicamente cuando este cambie (es decir, cuando se presione el boton editar, que será cuando se cargue la variable paciente)
    console.log(paciente);
  }, [paciente])
  */
  useEffect( () => {  
    if( Object.keys(paciente).length > 0 ){ //comprobamos si el objeto está vacio
      //console.log(paciente);
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    } 
  }, [paciente])

  //USO2 useEffect: PARA INDICAR CUANDO UN COMPONENTE ESTA LISTO/CARGADO
  /*useEffect( () => {
    console.log("El componente está listo");
  }, []); //si está vacío, sólo se ejecutará el useEffect una vez
  */



  //Generamos Id aleatorio para no usar un index para iterar en cada paciente
  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  }


  //creamos la funcion para asociarsela al evento handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault(); //prevenimos la accion por defecto

    //VALIDACION DEL FORMULARIO
    if([nombre, propietario, email, fecha, sintomas].includes('')){
      console.log('Al menos un campo está vacío');
      setError(true);
      return;
    }

    setError(false);
    //console.log("Enviando el formulario");

    //Objeto de paciente para el array de props 
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas/*,
      id: generarId()*/
    }

    if(paciente.id){  //si estamos editando:
      //le pasamos el id del paciente registrado previamente al objetoPaciente (para que así tenga id el nuevo objeto)
      objetoPaciente.id = paciente.id;

      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState);
    
      setPacientes(pacientesActualizados);
      
      //limpiamos:
      setPaciente({});

    }else{  //nuevo registro:
      //Generamos la nueva propiedad id (se agrega automaticamente al objetoPaciente)
      objetoPaciente.id = generarId();
      //Para no reescribir datos deberemos tomar una copia y añadimos el nuevo objeto
      setPacientes([...pacientes, objetoPaciente]);
    }

    //Reseteamos el state del Form al valor inicial
    setNombre('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');

  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center"> Seguimiento Pacientes </h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold">Adminístralos</span>
      </p>

      <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        
        {/* error ? 'Error de validacion' : 'No hay error de validacion' */}
        {/* error && 'Error de validacion' */}
        {
          /*error && (
            <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md">
              <p>Todos los campos son obligatorios</p>
            </div>
          )*/
          //Extraemos el codigo anterior para crear un componente nuevo:
        }

        { //PRIMERA FORMA DE ENVIAR PROPS
        //error && <Error mensaje='Todos los campos son obligatorios'/>
        }

        { //SEGUNDA FORMA DE ENVIAR PROPS, CON CHILDREN:
          error && <Error><p>Todos los campos son obligatorios</p></Error>
        }
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
            Nombre Mascota
          </label>

          <input 
            id="mascota" //con htmlFor en el label y este id iguales conseguimos que pulsando en el label se active el input
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            
            value={ nombre }
            //Evento de React onChange: Estamos escribiendo sobre el estado de nombre con lo que el usuario va escribiendo en el input utilizando setNombre
            //onChange={ (e) => console.log(e.target.value) }
            onChange={ (e) => setNombre(e.target.value) } //callback (aqui solo asignamos lo que el usuario escribe)
          />
        </div>

        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
            Nombre Propietario
          </label>

          <input 
            id="propietario" //con htmlFor en el label y este id iguales conseguimos que pulsando en el label se active el input
            type="text"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            
            value={ propietario }
            onChange={ (e) => setPropietario(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Email
          </label>

          <input 
            id="email" //con htmlFor en el label y este id iguales conseguimos que pulsando en el label se active el input
            type="email"
            placeholder="Email Contacto Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
            Alta
          </label>

          <input 
            id="alta" //con htmlFor en el label y este id iguales conseguimos que pulsando en el label se active el input
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          
            value={ fecha }
            onChange={ (e) => setFecha(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
            Síntomas
          </label>

          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los Síntomas"
          
            value={ sintomas }
            onChange={ (e) => setSintomas(e.target.value) }
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value={
            //AÑADIR PACIENTE O EDITAR PACIENTE?? Si existe el id del paciente -> edita, si no -> crea
            paciente.id ? 'Editar Paciente' : 'Añadir Paciente'
          }
        />
      </form>

    </div>

  )
}

export default Formulario


