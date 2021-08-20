import React, { useState } from 'react';
import ErrorBoundary from './components/errorBoundary';
import { AddTodoform } from './components/AddTodoForm';
import Header from './components/Head';
import { TodoList } from './components/TodoList';
/* import Modal from './components/Modal' */
import './style.css'



const initialTodos: Array<Todo> = [
  {
    id: 1, text: "Rubrik 1", tasks: [{ text: "en text", complete: false }],
  },
  {
    id: 2, text: "Rubrik 2", tasks: [{ text: "en text", complete: false }, { text: "en text", complete: false }, { text: "en text", complete: false }],
  },
  {
    id: 3, text: "Rubrik 3", tasks: [{ text: "en text", complete: false }, { text: "en text", complete: false }],
  }

]

/* React.Children.map(children, function[(thisArg)]) */

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [isOpen, setIsOpen] = useState(false)

  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return todo
      }
      return todo;
    });
    setTodos(newTodos);
  }

  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { text: newTodo, tasks: [] }])
  }

  return (
    <div>
      <errorBoundary/>
      <Header />
      <div className="centered" >
        <button onClick={() => setIsOpen(true)}> Open modal</button>
        <div className="listBoard">
          <React.Fragment>
            <TodoList todos={todos} toggleTodo={toggleTodo} />
            <AddTodoform addTodo={addTodo} />
          </React.Fragment>
        </div>

        {/*         <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        </Modal> */}

      </div>
    </div >
  );
}

export default App;

