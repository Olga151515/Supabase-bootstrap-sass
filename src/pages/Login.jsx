import React, {useState, useContext} from 'react'
import { Button, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProviderAuth from '../components/ProviderAuth';
import AppContext from '../context/AppContext';

const Login = () => {
  const [valid, setValid] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const {signIn} = useContext(AppContext)
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if(form.checkValidity()) {
      signIn(formData)
      setValid(true);
    } else {
      setValid(false);
    }
    
  };

  const handleInput = (e) => {
    setFormData({...formData, [e.target.name] : e.target.value})
}
  return (
    <>
    <Card.Header className='bg-primary p-3'>
      <h1 className='text-white  fs-3 text-center'>Sign in</h1>
    </Card.Header>
      <Card.Body className='p-3 bg-blue-100 rounded-3'>
        <Form validated={valid} onSubmit={handleSubmit}>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label> Email address</Form.Label>
              <Form.Control 
              required
                type='email' 
                placeholder='Enter email'
                name='email'
                value={formData.email}
                onChange={handleInput} />
               <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
               <Form.Control.Feedback type='invalid'>
                Looks bad!
              </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label> Password</Form.Label>
              <Form.Control 
              minLength={6} 
              required 
              type='password' 
              name='password'
              placeholder='Password'
              value={formData.password}
              onChange={handleInput}
               />
              <Form.Control.Feedback type='invalid'>
                At least 6 cherecters!
              </Form.Control.Feedback>
          </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                <Form.Check type='checkbox' label='Check me out' />
              </Form.Group>

              <div className='d-flex justify-content-between '>
              <ProviderAuth />
              <Button variant='primary ' className='text-white' type='submit' size='lg'
              onClick={signIn}>
            Submit
          </Button>
              </div>
         
        </Form>
      </Card.Body>
      <Card.Footer>
        <div className='d-flex justify-content-end gap-3'>
        <Link to ='/register'> Create a new account </Link>
        <Link to ='/forgotPassword'> Forgot Password? </Link>
        </div>
      </Card.Footer>
    </>
  )
}

export default Login;