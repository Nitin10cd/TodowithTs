import { FormEvent, useState } from 'react';
import { useTodos } from '../store/todo';

const AddTodo = () => {
  const [todo, settodo] = useState("");
  const { handleAddToDo } = useTodos();

  const handleFormInput = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!todo.trim()) return; 
    handleAddToDo(todo);
    settodo("");
  };

  return (
    <form onSubmit={handleFormInput}>
      <input
        type="text"
        value={todo}
        onChange={(e) => settodo(e.target.value)}
        placeholder="Enter a todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
