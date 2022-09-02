import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const LayoutPublic = ({children}) => {
  return (
      <Container>
        <Row className='vh-100 align-items-center bg-light'>
          <Col 
            xs={12}
            sm={{ span: 10, offset: 1}}
            md={{ span: 8, offset: 2}}
            lg={{span: 6, offset: 3}}
            >
              <Card className='p-3 shadow-lg border-0 rounded-3'>
              {children}
              </Card>
           
          </Col>
        </Row>  
      </Container>
  )
}

export default LayoutPublic;