import React, {useState} from 'react'
import { Button, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [valid, setValid] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(form.checkValidity());
    setValid(true);
  }
  return (
    <>
    <Card.Header className='bg-danger p-3'>
      <h1 className='text-white fs-3 text-center'>
       Reset password
        </h1>
    </Card.Header>
      <Card.Body className='p-3 bg-blue-100 rounded-3'>
        <Form validated={valid} onSubmit={handleSubmit}>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label> Email address</Form.Label>
              <Form.Control type='email' placeholder='Enter email' />
               <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
               <Form.Control.Feedback type='invalid'>
                Looks bad!
              </Form.Control.Feedback>
          </Form.Group>

              <div className='d-flex justify-content-end'>
              <Button variant='danger' type='submit' size='lg'>
            Submit
          </Button>
              </div>
         
        </Form>
      </Card.Body>
      <Card.Footer>
        <div className='d-flex justify-content-end gap-3'>
          <Link to ='/login'> Login </Link>
          <Link to ='/register'> Create a new account </Link>
        </div>
      </Card.Footer>
    </>
  )
}

export default ForgotPassword;