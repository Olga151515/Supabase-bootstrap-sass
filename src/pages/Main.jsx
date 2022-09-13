import React, {useState, useContext} from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import {BiMessageSquareAdd} from 'react-icons/bi'
import AddModal from '../components/main/AddModal'
import TodoList from '../components/main/TodoList'
import AppContext from '../context/AppContext'

const Main = () => {
  const [showModal, setShowModal] = useState(false);
  const {activeItems, inactiveItems} = useContext(AppContext)
  const modalOpen = () => setShowModal(true)
  const modalClose = () => setShowModal(false)
  return (
   <Container className='my-4 bg-white py-2 rounded-3 shadow' >
    <Row>
      <Col>
      <h2 className='fw-bold mb-0 text-primary'>My Todo list</h2>
      </Col>
      <Col className='col-auto'>
        <Button 
          variant='info' 
          className='text-white fw-semibold  gap-2 d-flex'
          onClick={modalOpen}
         >
          <BiMessageSquareAdd className='fs-4' />
          <span>ADD</span>
        </Button>
      </Col>
    </Row>
    <Row className='py-4 d-flex'>
      <Col>
      <h3>Todo</h3>
      {activeItems.length > 0 && <TodoList list={activeItems} />}
      </Col>
      <h3>Done</h3>
      <Col>{inactiveItems.length > 0 && <TodoList list={inactiveItems} />}
      </Col>
    </Row>
    <AddModal {...{showModal, modalClose}} />
   </Container>
  )
}

export default Main;