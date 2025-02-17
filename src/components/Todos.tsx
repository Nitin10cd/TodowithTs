import React from 'react';
import { useTodos } from '../store/todo';

const Todos = () => {
  const { todos, toggleTodoAsCompleted, handleDeleteTodo } = useTodos();

  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            id={`todo-${todo.id}`}
            checked={todo.completed}
            onChange={() => toggleTodoAsCompleted(todo.id)}
          />
          <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
          {todo.completed && (
            <button type="button" onClick={() => handleDeleteTodo(todo.id)}>
              Delete
            </button>
          )}
        </li>
      ))}
    </div>
  );
};

export default Todos;
