import Contador from "./componentes/Contador/Contador"
import Categorias from "./componentes/Categorias/Categorias"
import UtilizamosUseRef from "./componentes/UtilizamosUseRef/UtilizamosUseRef"
import UseRefDom from "./componentes/UseRefDom/UseRefDom"

/*
  CLASE 5: COMPONENTES 2

  Recordemos.., ¿Qué es un componente?
  Conjunto de elementos que cumplen una misma función en la interfaz del usuario. 

  1) Ciclo de vida de los componentes: es una serie de estados por los cuales pasa todo componente a lo largo de su existencia. 

  - Montaje (Ingresa el componente al DOM)
  - Actualización (Ejemplo, actualizo el valor del contador)
  - Desmontaje. (Cuando desaparece el contador y aparece el botón de finalizar compra.)






*/

const App = () => {
  return (
    <div>
      <h1>Clase 5: Componentes 2</h1>
      <Contador stock={10} inicial={1}/>
      <Contador stock={8} inicial={3}/>
      <Categorias/>
      <UtilizamosUseRef/>
      <UseRefDom/>


    </div>
  )
}

export default App