import React from 'react'

const Modal = (props) => {


    const cancelButton= () => {
        props.onCancel()

    }

    const confirmButton = () => {
        props.onConfirm()

        
    }
    return (
        <div className="modal">
            <p>Are you sure?</p>
            <button className="btn" onClick={cancelButton}>Cancel</button>
            <button className="btn" onClick={confirmButton}>Confirm</button>

            
        </div>
    )
}

export default Modal
