import { useState, useEffect } from "react"

//El efecto primario de React es renderizar componentes, manipulando el dom. 
//Una App Web tiene que hacer mucho más que solo mostrarse, tiene que realizar operaciones, consumir datos de servidores, usar eventos. 

//Utilizamos para lograr esto useEffect. 
//Con este Hook le digo a React "hace más cosas además de solo renderizar el componente"
//Me permite controlar todos los efectos secundarios provocados por el cambio de estado. 

const Contador = ({stock, inicial}) => {
    const [contador, setContador] = useState(inicial);
    const [color, setColor] = useState("black");

    useEffect( ()=> {
        document.title = `Contador: ${contador}`;

            // Y si quiero que cuando el contador llegue a 5 me cambie el color de fondo del botón "agregar al carrito": 

            // if(contador === 5) {
            //     document.getElementById("boton").style.color= "red";
            // }
            //Esto no es lo más recomendado porque estoy accediendo directamente al DOM. 
            //Y no se considera una buena idea, lo mejor es usar un estado para cambiar el color del botón y dejar que React se encargue de la manipulación de DOM. 
            //Puedo hacer lo siguiente: 

            if(contador > 5) {
                setColor("red");
            } else {
                setColor("black");
            }

    }, [contador])

    const aumentarContador = () => {
        if(contador < stock) {
            setContador(contador + 1);
        }
    }

    const reducirContador = () => {
        if(contador > inicial){
            setContador(contador - 1);
        }
    }

    const agregarAlCarrito = () => {
        console.log(`Agregado ${contador} items`);
    }

  return (
    <div>
        <h2>Mi Super Contador</h2>

        <button onClick={reducirContador}> - </button>
        <strong> {contador} </strong>
        <button onClick={aumentarContador}> + </button>
        
        <br />
        <br />

        <button onClick={agregarAlCarrito} id="boton" style={{color: color}}> Agregar al Carrito </button>


    </div>
  )
}

export default Contador