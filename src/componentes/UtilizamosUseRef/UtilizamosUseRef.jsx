import { useRef } from "react"

//UseRef es un hook que me permite crear una referencia mutable que puede ser actualizada sin provocar una nueva renderización del componente. 



const UtilizamosUseRef = () => {
    const objetoUseRef = useRef(0);
    // Este hook retorna un objeto con la propiedad "current" la cual puede mutar.

    const agregarCompra = () => {
        objetoUseRef.current = objetoUseRef.current + 1;
        console.log(objetoUseRef.current);
    }

  return (
    <div>
        <h2>Productos Marolio Comprados: {objetoUseRef.current} </h2>
        <button onClick={agregarCompra}> Comprar </button>
    </div>
  )
}

export default UtilizamosUseRef