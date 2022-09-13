import React, {useState, useContext} from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import {FaSave} from 'react-icons/fa'
import AppContext from '../../context/AppContext'

const AddModal = ({showModal, modalClose}) => {
    const [newTodo, setNewTodo] = useState('')
    const {addItem} = useContext(AppContext)
    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(newTodo)
        setNewTodo("")
        modalClose()
    }
  return (
 <Modal show={showModal} onHide={modalClose}>
        <Modal.Header closeButton>
            <Modal.Title>New Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form 
                onSubmit={handleSubmit}
                className='d-flex gap-2'
            >
                <Form.Control 
                    autoFocus
                    type='text' 
                    placeholder='todo item...' 
                    required
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                 <Button 
                    type='submit'
                    variant='success' 
                    className='lh-1'> 
                    <FaSave  className='text-white fw-bold'/>
                 </Button>
            </Form>
        </Modal.Body>
   </Modal>
  )
}

export default AddModal