import React from 'react'
import './Route53.css'


const Route53 = () => {

  return (

    <>
<div className="container">
<h1> Create Standalone AWS EC2 Instance in a VPC </h1>
    <div className="panel panel-default">
        <div className="panel-heading">Create EC2 instance</div>
        <div className="panel-body">
            <div className="col-md-offset-2 col-md-8">
                <div className="alert alert-danger" ></div>
                <div className="alert alert-success" ></div>
            </div>
            <div className="col-md-offset-2 col-md-8">
             
                <form>
                    <div className="form-group">
                        <label>Subnet ID</label>
                        <input type="text" placeholder="subnet-xyz123" name="subnet" id="subnet" className="form-control" required />
                    </div>
                    <div className="form-group">
                        <label>Security Group ID</label>
                        <input type="text" placeholder="sg-a1b2c3" name="sgroup" id="sgroup" className="form-control" required />
                    </div>
                    <div className="form-group">
                        <label>Profile ARN</label>
                        <input type="text" placeholder="arn:aws:iam::123456789012:instance-profile/Role" name="arn" id="arn" className="form-control" value="arn:aws:iam::902018721894:instance-profile/BTSKeyRole" required />
                    </div>
                    <div className="form-group" >
                        <label>AWS Region</label>
                        <select className="form-control" id="region" name="region" required>
                            <option value="" selected disabled>Select Region</option>
                            <option value="us-east-1">US East (N. Virginia)</option>
                            <option value="us-east-2">US East (Ohio)</option>
                            <option value="us-west-1">US West (N. California)</option>
                            <option value="us-west-2">US West (Oregon)</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Access Key ID</label>
                        <input type="text" placeholder="AKIAIOSFODNN7EXAMPLE" value="AKIAIZZZYYYYYYQ" name="accessid" id="accessid" className="form-control" required />
                    </div>
                    <div className="form-group">
                        <label>Secret Access Key</label>
                        <input type="password" placeholder="wJalrXUtnFEMIK7MDENGbPxRfiCYEXAMPLEKEY" value="Cy13vPOij03nQWmh6788789c1mWGNbLtVeiv" name="accesskey" id="accesskey" className="form-control" required />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-info" type="button" id="generate" data-loading-text="<i className='fa fa-circle-o-notch fa-spin'></i> Creating EC2 Instance" >Create EC2 instance</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
 
         
</div>




   


   </> 

 );
};

export default Route53;