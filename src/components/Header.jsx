
function Header() { 


    return (

        <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto"> 
            Seguimiento Pacientes {''} Con GitHub {''}
            <span className="text-indigo-600"> Veterinaria </span>
        </h1>
    )
}


//Lo exportamos a App.jsx
export default Header;


/*
-LOS COMPONENTES DEBEN IR NOMBRADOS LA PRIMERA LETRA EN MAYUSCULA,
TANTO EN EL ARCHIVO COMO EN EL COMPONENTE.
-AL ESTAR USANDO vite NECESITAMOS QUE SEAN .jsx (si fuese React App podriamos usar .js o .jsx)
-UN COMPONENTE ES UNA FUNCION QUE REQUIERE RETURN DE UN SOLO ELEMENTO
*/


//Tambien podemos acceder a cada prop de la siguiente manera:
//function Header({numeros, isAdmin,fn}) {
    //console.log(numeros);
    //console.log(isAdmin);
    //fn();
/*
function Header(//props//{toma1Valor}) { 

    //Mostramos los props pasados desde App.jsx
    //console.log(props);

    //Variable a enviar a App.jsx indirectamente con props (recibimos la funcion del padre en donde devolveremos la variable del hijo):
    const variableHeader = true;
    toma1Valor(variableHeader);

    return (

        <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto"> 
            Seguimiento Pacientes {''} 
            <span className="text-indigo-600"> Veterinaria </span>
        </h1>
    )
}


//Lo exportamos a App.jsx
export default Header;

*/