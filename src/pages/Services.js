import React, { useState } from "react";
import './services.css';
import axios from 'axios'

const Services = () => {
    const [ami, setAmi] = useState("");
    const [instanceTagName, setinstanceTagName] = useState("");
    const [instance_type, setinstance_type] = useState("");
    const [region, setRegion] = useState("");
    const [key, setKey] = useState("");
    const [secret, setSecret] = useState("");
    const handleForm = (e) => {
        e.preventDefault();
         
            const data = {
              "AMI":ami,
              "instance Tag Name":instanceTagName,
              "Instance Type":instance_type,
             "AWS Region":region,
                "Access Key ID":key,
                "Secret Access Key":secret,
                 
            } 
            axios.post('http://localhost:5000/service',data)
            .then((res)=>{
            setAmi("");
            setinstanceTagName("");
            setinstance_type("");
            setKey("");
            setSecret("");
            setRegion("")
            })
            .catch((err)=>{
                console.log(err);
            })
            
           

         

    };
    return (


    <div   className="container">
        <div className="panel panel-default">
            <div className="panel-heading">Create EC2 instance</div>
            <div className="panel-body">
                
                <div className="col-md-offset-2 col-md-12">
                 
                    <form id="form" role="form" className="form" onSubmit={(e) => handleForm(e)}>
                        <div className="row">
                        <div className="col-6 styleL">
                            <label>ami</label>
                            <input type="text" placeholder="ami-c998b6b2" name="subnet" id="subnet" className="form-control" required
                             value={ami}
                             onChange={(e) => setAmi(e.target.value)}
                            />
                        </div>
                        <div className="col-6 styleR">
                            <label>instance-tag-name</label>
                            <input type="text" placeholder="EC2-instance-created-with-terraform" name="instanceTagName" id="instanceTagName" className="form-control" required 
                             value={instanceTagName}
                             onChange={(e) => setinstanceTagName(e.target.value)}
                            />
                        </div>
                        </div>
                        <div className='row'>
                        <div className="col-6 styleL">
                            <label>instance_type </label>
                            <input type="text" placeholder="t2.micro" name="instance_type" id="instance_type" className="form-control"   required
                             value={instance_type}
                             onChange={(e) => setinstance_type(e.target.value)}
                            />
                        </div>
                        <div className="col-6 styleR" >
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
                        <div className='row'>
                        <div className="col-6 styleL">
                            <label>Access Key ID</label>
                            <input type="text" placeholder="AKIAIOSFODNN7EXAMPLE" v  name="accessid" id="accessid" className="form-control" required
                             value={key}
                             onChange={(e) => setKey(e.target.value)}
                            />
                        </div>
                        <div className="col-6 styleR">
                            <label>Secret Access Key</label>
                            <input type="password" placeholder="wJalrXUtnFEMIK7MDENGbPxRfiCYEXAMPLEKEY"   name="accesskey" id="accesskey" className="form-control" required 
                             value={secret}
                             onChange={(e) => setSecret(e.target.value)}
                            />
                        </div>
                        </div>
                        
                          
                        <div className="submit">
                            <button className="btn btn-info" type="submit" id="generate" data-loading-text="<i className='fa fa-circle-o-notch fa-spin'></i> Creating EC2 Instance" >Create EC2 instance</button>
                        </div>
                   
                    </form>
                </div>
            </div>
        </div>
     
             
    </div>
     );
   };

export default Services;
