
import React, { useState } from "react";
import './connectToAws.css';
 
import axios from 'axios'


const ConnectToAws = () => {
    const [key, setKey] = useState("");
    const [secret, setSecret] = useState("");
    const [region, setRegion] = useState("");

    const handleForm = (e) => {
        e.preventDefault();
        if (key && secret) {
            const data = {
               "Access Key ID": key,
                "Secret Access Key" :secret,
                "AWS Region":region
            };
           
        axios.post('http://localhost:5000/connection',data)
        .then((res)=>{
            console.log("okkkkk")
            setKey("");
            setSecret("");
            setRegion("")
        })
        .catch((err)=>{
            console.log(err);
        })
  
        
        }

    };
    return (

        <div className='container' >
            <form onSubmit={(e) => handleForm(e)} >
                <div className='row col-md-12'>

                    <div>
                        <label>Access Key ID</label>
                        <input type="text" name="accessid" id="accessid" className='form-control' required
                            value={key}
                            onChange={(e) => setKey(e.target.value)}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Secret Access Key</label>
                        <input type="text " name="accesskey " id="accesskey " className='form-control' required
                            value={secret}
                            onChange={(e) => setSecret(e.target.value)}
                        />
                    </div>



                    <div className="form-group" >
                        <label>AWS Region</label>
                        <select className="form-control" id="region" name="region" required
                            value={region}
                            onChange={(e) => setRegion(e.target.value)}
                        >
                            <option value="" selected disabled>Select Region</option>
                            <option value="us-east-1">US East (N. Virginia)</option>
                            <option value="us-east-2">US East (Ohio)</option>
                            <option value="us-west-1">US West (N. California)</option>
                            <option value="us-west-2">US West (Oregon)</option>
                        </select>
                    </div>

                </div>
                <button type="submit" className='btn btn-primary'>Subbmit</button>
            </form>
          
        </div>


    );
};



export default ConnectToAws;