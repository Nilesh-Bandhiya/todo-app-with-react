import React from "react";

const TodosList = ({ todos, setTodos, setEditTodo }) => {

  const deleteHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editHandler = (id) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  }

  const completeHandler = (todo) => {
    setTodos(
        todos.map((item) => {
            if(item.id === todo.id){
                return { ...item, completed: !item.completed }
            }
            return item;
        })
    )
}

  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className={`list ${todo.completed ? "complete" : ""}`}
            onChange={(e) => e.preventDefault()}
          />
          <div>
            <button
              className="button-complete task-button"
              onClick={() => completeHandler(todo)}
            >
              <i className="fa fa-check-circle" aria-hidden="true"></i>
            </button>
            <button className="button-edit task-button" onClick={() => editHandler(todo.id)}>
              <i className="fa fa-pencil-square" aria-hidden="true"></i>
            </button>
            <button
              className="button-delete task-button"
              onClick={() => deleteHandler(todo.id)}
            >
              <i className="fa fa-trash" aria-hidden="true"></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodosList;
