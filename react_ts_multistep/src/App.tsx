// components

import {GrFormNext, GrFormPrevious} from "react-icons/gr";
import UserForm from "./components/UserForm";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks";
import { useForm } from "./hooks/useForm";

import './App.css'

function App() {

  const formComponents = [
    <ReviewForm/>,
    <UserForm/>,
    <Thanks/>


  ]

  const {currentStep,currentComponent,changeStep} = useForm(formComponents);

  return (
    <div className="app">
      
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>Ficamos felizes com a sua compra, utilize o formulario abaixo para avaliar o produto!</p>
      </div>
      <div className="form-container">
        <h2>passos</h2>
        <form onSubmit={(e) => changeStep(currentStep + 1,e)}>
          <div className="inputs-container">
            {currentComponent}
          </div>
          <div className="actions"></div>
          <button type="button" onClick={() => changeStep(currentStep - 1)}><GrFormPrevious/><span>Voltar</span></button>
          <button type="submit"><GrFormNext/><span>Avançar</span></button>
        </form>
      </div>
    </div>
  )
}

export default App
