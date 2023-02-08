import styled from "styled-components"
import { useState } from "react"

const Content = styled.div`

`

export default function Todo() {

  const [task, setTask] = useState("")
  const [itemList, setItemList] = useState([])

  function handleChangeInput(event) {
    const inputTask = event.target.value

    setTask(inputTask)
  }

  function handleAddItemToList(event) {
    event.preventDefault()

    if (!task) { // <----- Se nao tiver vazio, nao faz nada
      return
    }

    setItemList([...itemList, task])

    setTask("")
  }

    return (
        <div className="todo-wrapper">
          <h1>ToDo List</h1>
          <form onSubmit={handleAddItemToList}>
            <input type="text" placeholder="Adicione uma tarefa" onChange={handleChangeInput} value={task}/>
            <button type="submit">Adicionar</button>
          </form>
    
          <ul className="todo-list" >
            {itemList.map((item, index) => {
              <li key={index}>{item}</li>
            })}
          </ul>
        </div>
      );
}