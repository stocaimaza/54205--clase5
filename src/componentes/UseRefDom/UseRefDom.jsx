import { useRef } from "react"

const UseRefDom = () => {
    const ref = useRef(null);

    const manejarClick = () => {
        if(ref.current) {
            ref.current.textContent = "Este texto lo modificamos con useRef";
        }
    }

  return (
    <div>
        <h2>Modificamos el DOM usando UseRef</h2>

        <p ref={ref}>Este Hook nos permite acceder a elementos del DOM y modificarlos </p>
        
        <button onClick={manejarClick}> Hace click para modificar </button>
    </div>
  )
}

export default UseRefDom