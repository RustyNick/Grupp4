import React from "react"

const ModalView: React.FC = () => {
    return (
        <div style={{
            position: 'absolute',
            width: '20%',
            height: '20%',
            display: 'flex',
            justifyContent: 'center',
            justifyItems: 'center',
            flexDirection: 'column',
            top: '30%',
            left: '43%',
            marginTop: '-50px',
            marginLeft: '-50px',
            backgroundColor: 'whitesmoke',

            zIndex: 999,
        }}>
            Skapare av app
            <ul style={{
                listStyle: 'none',
            }}>
                <li>Kanan</li>
                <li>Niklas</li>
                <li>Victor</li>

            </ul>

        </div>
    )
}

export default ModalView
