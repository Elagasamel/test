import React from 'react'
import Button from "react-bootstrap/Button";
import './DynamoDB.css'

const RDS = () => {

  return (

    <>
    
    <div className="mb-2">
    <Button name="b1" size="lg" variant="primary" active> SQL SERVER </Button>{' '}
    <Button name="b2" size="lg" variant="secondary" active> PostgreSQL </Button>{' '}
    <Button size="lg" variant="success" active> MySQL </Button>{' '}
    <Button size="lg" variant="warning" active> MariaDB </Button>{' '}
    <Button name="b2" size="lg" variant="secondary" active> Oracle </Button>{' '}
    <Button size="lg" variant="success" active>Amazon Aurora</Button>{' '}
          
 
    </div>
       
  

    </> 
  );

};


export default RDS;