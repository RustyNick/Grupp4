import React, { useState } from 'react';
import ErrorBoundary from './components/errorBoundary';
import { AddTodoForm } from './components/AddTodoForm';
import Header from './components/Head';
import { TodoList } from './components/TodoList';
import './style.css'
import Modal from './components/Modal';
import ModalView from './components/ModalView';
import ViewPage from './components/ViewPage';


const App: React.FC = () => {
  const [isModalopen, setIsModalOpen] = useState(false)
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
      <ViewPage />
    </div >
  );
}

export default App;

