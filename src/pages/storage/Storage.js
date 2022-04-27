import React from 'react';
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import './Storage.css';

function Storage() {
  const history = useHistory();
  function handleClick(path) {
    history.push(path);
  }
  return (
    <div className="Storage">
       
        <div className="d-grid gap-2">         
      
            <Button variant="btn btn-info" size="lg"  onClick={() => history.push('/storage/EFS')}>Click button to view Amazon EFS </Button>
            {' '} <Button  variant="primary" size="lg" onClick={() => history.push('/storage/ EBS')}>Click button to view Amazon EBS </Button>
         
            {' '} <Button  variant="btn btn-warning" size="lg" onClick={() => handleClick('/storage/S3')}>Click button to view S3</Button>
    
        </div>
      </div>
  )
}export default  Storage;