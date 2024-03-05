import { ChangeEvent, useState } from "react";
import Todo from "../componet/Todo";

function ToDoList() {

  const [toDo, setToDo] = useState<string>('');
  const [toDos, setToDos] = useState<string[]>([]);

  const inputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setToDo(event.target.value);
  }
  const btnClick = () => {
    if (toDo === '') {
      return;
    }
    setToDos((toDos) => [toDo, ...toDos]);
    setToDo('');
  }

  const deleteToDo = (idx: number): void => {
    setToDos(
      [...toDos.slice(0, idx), ...toDos.slice(idx+1)]
    )
  }

  return (
    <div>
      <h1>ToDoList</h1>
      <input
        type='text'
        name='toDo'
        value={toDo}
        onChange={inputChange}
      />
      <button onClick={btnClick}>Click</button>
      {toDos.map((toDo: string, idx: number) => {
        return (
          <Todo 
            key={idx}
            index={idx}
            content={toDo} 
            deleteToDo={deleteToDo}            
          />
        )      
      })}
    </div>
  )
}

export default ToDoList;