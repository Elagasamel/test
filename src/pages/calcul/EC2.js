import React from 'react'
import Button from "react-bootstrap/Button";

import './EC2.css';

const EC2 = () => {

  const  Createec2 = () => {

    var axios = require('axios');
  
    var config = {
      method: 'post',
      url: 'http://localhost:8080/createEC2Instance'
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  
  }
  const  Readec2 = () => {

    var axios = require('axios');
  
    var config = {
      method: 'get',
      url: 'http://localhost:8080/read_ec2'
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  const  deletec2 = () => {

    var axios = require('axios');
  
    var config = {
      method: 'get',
      url: 'http://localhost:8080/delete_ec2'
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
    <Button name="b1" size="lg" variant="primary" onClick={Createec2} > Create EC2 </Button>{' '}
    <Button name="b2" size="lg" variant="secondary" onClick={Readec2} > Read EC2 </Button>{' '}
    <Button size="lg" variant="warning" onClick={deletec2} > Destory EC2 </Button>{' '}

    
      
    </div>
       
  

    </> 

    
  );
};


export default EC2;