import { useState, useEffect } from 'react'; //importamos el hook

import Header from "./components/Header"; //importamos componente
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {

  //donde almacenaremos con props una lista de pacientes (introducidos en el componente del formulario)
  //LOS PROPS SIEMPRE PASAN DEL PADRE AL HIJO (SIEMPRE QUE VAYAMOS A PASARLO ENTRE VARIOS COMPONENTE DEBEMOS REGISTRARLO EN EL COMPONENTE PRINCIPAL)
  const [pacientes, setPacientes] = useState([]); //lista de pacientes
  const [paciente, setPaciente] = useState({}); //cada objeto paciente 

  //useEffect para comprobar si en local storage hay algo y si lo hay lo setea en el state (antes de que se ejecute el otro effect)
  useEffect(() => { //SE EJECUTARÁ UNA SOLA VEZ CUANDO EL COMPONENTE ESTE LISTO
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];  //si no hay nada en localstorage coloca un [] (y lo parseamos de string a objeto)
      setPacientes(pacientesLS);
    }

    obtenerLS();
  },[]); //para que se ejecute una sola vez

  //useEffect para almacenar los datos en local storage cada vez que se produzca un cambio en pacientes (no podemos guardar arrays, siempre strings)
  useEffect( () => {  //SINCRONIZA EL STATE CON LO QUE HAYA EN PACIENTES
    //console.log('Componente listo o cambio en pacientes');
    localStorage.setItem('pacientes', JSON.stringify( pacientes ));
  },[pacientes]); //tb perderá los datos al actualizar pagina dado que pacientes inicializa a []

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id);
    setPacientes(pacientesActualizados);
  }

  return(
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}

          paciente={paciente}
          setPaciente={setPaciente}
        />

        
        <ListadoPacientes 
          //Enviamos un prop con los pacientes de App.jsx a ListadoPacientes.jsx para mostrarlos
          pacientes={pacientes}
          
          setPaciente={setPaciente} //para modificar esa parte del state

          eliminarPaciente={eliminarPaciente}
        />


      </div>

    </div>
  )

}

export default App







/*
function App() {

  //Antes del return se pueden crear funciones y condicionales
  
  const sumar = () => {
    console.log(2+2);
  }
  
  sumar();
  
  
  //Podemos hacer comparaciones dentro del return con operadores ternarios
  const edad = 18;

  //Aqui se devolvera lo que se muestra por pantalla (un solo elemento en el nivel superior, fragment en este caso<>)
  return (  //no se pueden colocar funciones ni if, switch, etc (se deberá hacer antes)
    <>
      {edad >= 18 ? 'Eres mayor de edad' : 'No eres mayor de edad'}
      <div>
        <h1> Hola Mundo! </h1>
        <p>Un Parrafo</p>
      </div>
      <div>
        <h1> {'Algunas Pruebas'.toLowerCase()}: </h1>
        <p> HTML = 1+1   </p>
        <p> JavaScript = {1+1} </p> 
        <p> Edad = {edad} </p>
      </div>
    </>
  )
}

export default App
*/



/*EJEMPLOS PROPS:


import { useState, useEffect } from 'react'; //importamos el hook

import Header from "./components/Header"; //importamos componente
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {

  //donde almacenaremos con props una lista de pacientes (introducidos en el componente del formulario)
  //LOS PROPS SIEMPRE PASAN DEL PADRE AL HIJO (SIEMPRE QUE VAYAMOS A PASARLO ENTRE VARIOS COMPONENTE DEBEMOS REGISTRARLO EN EL COMPONENTE PRINCIPAL)
  const [pacientes, setPacientes] = useState([]); 


  const imprime2mas2 = () => {
    console.log(2+2);
  }

  //PARA PASAR PROPS DESDE EL HIJO AL PADRE NO LO PODEMOS HACER DIRECTAMENTE, DEBEREMOS:
  const toma1Valor = (valor) => {
    console.log(valor);
  }

  return(
    <div className="container mx-auto mt-20">
      <Header 
        //Le pasamos algunos props de App.jsx al Header.jsx
        numeros={1}
        isAdmin={false}
        fn={imprime2mas2}
        //Le pasamos la funcion toma1Valor de App.jsx a Header.jsx
        toma1Valor = {toma1Valor}
      />

      <div className="mt-12 md:flex">
        <Formulario />
        <ListadoPacientes />
      </div>

    </div>
  )

}

export default App


*/