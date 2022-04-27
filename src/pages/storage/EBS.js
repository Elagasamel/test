import React from 'react'
import Button from "react-bootstrap/Button";
import './EFS.css';

const EBS = () => {
  
  const  Createebs = () => {

  var axios = require('axios');

  var config = {
    method: 'get',
    url: 'http://localhost:8080/createBucket/'
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });

 

}


  return (

    <>
    
    <div className="mb-2">
   
    <Button name="b1" size="lg" variant="primary" onClick={Createebs} > create bucket</Button>{' '}
    <Button name="b2" size="lg" variant="secondary" active> Plan </Button>{' '}
    <Button size="lg" variant="success" active>Deploy to AWS</Button>{' '}
    <Button size="lg" variant="warning" active>Destory Infrastructure</Button>{' '}
      
 
    </div>
       
  

    </> 
  );
};


export default EBS;