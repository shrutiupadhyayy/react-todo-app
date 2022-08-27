import React, {useState} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos ] = useState([]);

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
          return;
        } //if there's no letter type, it doesn't show up

    const newTodos = [todo, ...todos];

        setTodos(newTodos);
        console.log(...todos);
      };

      const removeTodo = id => {
        const removedArr = [...todos].filter(todo => todo.id !== id);
    
        setTodos(removedArr);
      };
    

    
      const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
          if (todo.id === id) {
            todo.isComplete = !todo.isComplete;
          }
          return todo;
        });
        setTodos(updatedTodos);
      };
    
    
  return (
    <div>
        <h1>WE GONNA BUILD A CLOCK TODAYYY YAAH</h1>
        <TodoForm onSubmit={addTodo} />
        <Todo 
            
        />

    </div>
  )
}

export default TodoList;