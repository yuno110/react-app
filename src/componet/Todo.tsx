import { IToDo } from '../interface/IToDo'


function Todo({ index, content, deleteToDo }: IToDo) {

  return (
    <div>
      {content}
      <button onClick={() => deleteToDo(index)}>
        remove
      </button>
    </div>
  )
}

export default Todo