import React, { useState } from 'react';
import ErrorBoundary from './components/errorBoundary';
import { AddTodoform } from './components/AddTodoForm';
import Header from './components/Head';
import { TodoList } from './components/TodoList';
import './style.css'
import Modal from './components/Modal';
import ModalView from './components/ModalView';



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

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);
  //Modalens öppna och stänga function
  const [isModalopen, setIsModalOpen] = useState(false)

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
      {/* <errorBoundary /> */}
      {isModalopen && (
        <Modal>
          <div style={{
            position: 'fixed',
            height: '100vh',
            width: '100vw',
            background: 'rgba(0,0,0,0.5)',
            top: '0',
            left: '0',
            zIndex: 99,
          }}
          >
            <div>
              <div>

                {<ModalView />}

                <button style={{
                  width: '100px',
                  height: '30px',
                  marginTop: '10px',
                  borderRadius: '10px',
                }}
                  onClick={() => setIsModalOpen(false)}
                >close
                </button>

              </div>
            </div>
          </div>
        </Modal>
      )

      }
      <Header />
      <div style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <button onClick={() => setIsModalOpen(true)}>Open modal</button>
      </div>
      <div className="centered" >
        <div className="listBoard">
          <React.Fragment>
            <TodoList todos={todos} toggleTodo={toggleTodo} />
            <AddTodoform addTodo={addTodo} />
          </React.Fragment>
        </div>
      </div>
    </div >
  );
}

export default App;

