import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const updateHandler = (title, id, complete) => {
    console.log(title, id, complete);
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { title, id, complete } : todo
    );
    setTodos(updatedTodos);
    setEditTodo("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateHandler(input, editTodo.id, editTodo.completed);
    }
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Enter a Todo..."
        className="task-input"
        value={input}
        onChange={changeHandler}
      />
      <button className="button-add" type="submit">
        {editTodo ? "Ok" : "Add"}
      </button>
    </form>
  );
};

export default Form;
