import React from 'react';
import './Network.css'
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";


function Network() {
  const history = useHistory();
  function handleClick(path) {
    history.push(path);
  }
  return (
    <div className="Calcul">
       
        <div className="d-grid gap-2">         
          <form>
            <Button variant="primary" size="lg"  onClick={() => history.push('/network/Route53')}> Click button to view Amazon Route53 </Button>
            {' '} 
         
            <Button variant="btn btn-warning" size="lg" onClick={() => handleClick('/network/VPC')}>Click button to view Amazon VPC</Button>
         </form>
        </div>
      </div>
  )
}export default  Network;