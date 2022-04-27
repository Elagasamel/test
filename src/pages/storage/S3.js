import React from 'react'
import Button from "react-bootstrap/Button";

import './EFS';

const S3 = () => {

  const  CreateS3 = () => {

    var axios = require('axios');
  
    var config = {
      method: 'post',
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
  const  ReadS3 = () => {

    var axios = require('axios');
  
    var config = {
      method: 'get',
      url: 'http://localhost:8080/listBuckets/'
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  
   
  
  }
  const  listObjectsInBucketS3 = () => {

    var axios = require('axios');
  
    var config = {
      method: 'get',
      url: 'http://localhost:8080/listObjectsInBucket/'
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
    <Button name="b1" size="lg" variant="primary" onClick={CreateS3} > Create your first S3 bucket </Button>{' '}
    <Button name="b2" size="lg" variant="secondary" onClick={ReadS3} > List all your S3 buckets </Button>{' '}
    <Button size="lg" variant="warning" onClick={listObjectsInBucketS3} > list Objects In your Bucket S3 </Button>{' '}
      
 
    </div>
       
  

    </> 
  );
};


export default S3;