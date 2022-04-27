import React , {useState} from 'react';
import { uploadFile } from 'react-s3';
import Button from "react-bootstrap/Button";


const S3_BUCKET ='YOUR_BUCKET_NAME';
const REGION ='YOUR_REGION_NAME';
const ACCESS_KEY ='YOUR_ACCESS_KEY';
const SECRET_ACCESS_KEY ='YOUR_SECRET_ACCESS_KEY';

const config = {
    bucketName: S3_BUCKET,
    region: REGION,
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
}

const UploadImageToS3WithReactS3 = () => {

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const handleUpload = async (file) => {
        uploadFile(file, config)
            .then(data => console.log(data))
            .catch(err => console.error(err))
    }

    return  <div className="mb-2">  

        <p>React S3 File Upload</p>
        <input type="file" onChange={handleFileInput} onClick={() => handleUpload(selectedFile)}></input>
        {' '}
        
        
        <Button onClick={() => uploadFile(selectedFile)}> Upload to S3</Button>
    </div>
     
    
};


export default UploadImageToS3WithReactS3;