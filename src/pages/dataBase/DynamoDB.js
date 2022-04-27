import React from 'react'
import Button from "react-bootstrap/Button";
import './DynamoDB.css';



const DynamoDB = () => {

  return (

    <>
    
    <div className="mb-2">
    <Button name="b1" size="lg" variant="primary" active>Generate Terraform</Button>{' '}
    <Button name="b2" size="lg" variant="secondary" active> Plan </Button>{' '}
    <Button size="lg" variant="success" active>Deploy to AWS</Button>{' '}
    <Button size="lg" variant="warning" active>Destory Infrastructure</Button>{' '}
      
 
    </div>
       
  

    </> 
  );
};


export default DynamoDB;