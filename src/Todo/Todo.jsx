import styled from "styled-components"
import { useState } from "react"

const Content = styled.div`

`

export default function Todo() {

  const [task, setTask] = useState("") // <------ estado
  const [itemList, setItemList] = useState([]) // <----- será um Array

  function handleChangeInput(event) {
    const inputTask = event.target.value

    setTask(inputTask) // <----- atualizamos o estado "task" atraves de "setTask"
  }

  // Adiciona um novo elemento na lista
  function handleAddItemToList(event) {
    event.preventDefault() // <----- desabilita o refresh na pagina ao enviar um formulário

    if (!task) { // <----- Evita o usuário adicionar uma tarefa sem nome
      return
    }

    setItemList([...itemList, task]) // <----- Copia todos os items ja existentes e entao adiciona um novo item

    setTask("") // <----- Reseta o valor do input
  }

    return (
        <div className="todo-wrapper">
          <h1>ToDo List</h1>
          <form onSubmit={handleAddItemToList}>
            <input type="text" placeholder="Adicione uma tarefa" onChange={handleChangeInput} value={task}/>
            <button type="submit">Adicionar</button>
          </form>
    
          <ul className="todo-list" >
            {itemList.map((item, index) => ( // <----- Percorremos o array de todos
              <li key={index}>{item}</li> // <----- Para cada item do array, criamos um `li`
            ))}
          </ul>
        </div>
      );
}