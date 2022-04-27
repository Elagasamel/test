import React from 'react';
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import './DataBase.css';

function DataBase() {
  const history = useHistory();
  function handleClick(path) {
    history.push(path);
  }
  return (
    <div className="DataBase">
       
        <div className="d-grid gap-2">         
          <form>
            <Button variant="primary" size="lg"  onClick={() => history.push('/database/DynamoDB')}>Click button to view Amazon DynamoDB </Button>
            {' '} 
            <Button variant="btn btn-warning" size="lg" onClick={() => handleClick('/database/RDS')}>Click button to view MySQL</Button>
         </form>
        </div>
      </div>
  )
}export default  DataBase;