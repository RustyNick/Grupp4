import React, { useState } from 'react';
import '../style.css'
import Header from './Head';
import Modal from './Modal';
import ModalView from './ModalView';
import ViewPage from './ViewPage';
import { Button } from '@material-ui/core';
import ErrorBoundary from './ErrorBoundary';

const ToDoPage: React.FC = () => {
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
        <ErrorBoundary> <Button variant="contained" color="default" onClick={() => setIsModalOpen(true)}>Creators of App</Button></ErrorBoundary>
      </div>

      <ViewPage />

    </div>
  )
}

export default ToDoPage