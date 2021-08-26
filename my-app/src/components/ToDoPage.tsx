import React, { useState } from 'react';
import '../style.css'
import ErrorBoundary from './ErrorBoundary';
import { useHistory } from 'react-router-dom'
import { AddTodoForm } from './AddTodoForm';
import Header from './Head';
import { TodoList } from './TodoList';
import Modal from './Modal';
import ModalView from './ModalView';
import ViewPage from './ViewPage';

const ToDoPage: React.FC = () => {
  const history = useHistory()
  const [isModalopen, setIsModalOpen] = useState(false)
  return (
    <div >

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

    </div>
  )
}

export default ToDoPage