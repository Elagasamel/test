import React, { useState } from "react";
import FileUpload from "./components/file-upload/file-upload.component";
import { S3Client, UploadPartCommand } from "@aws-sdk/client-s3"

function Upload() {
  
  const [files, setFiles] = useState([]);
  const [showUploadComplete, setShowUploadComplete] = useState(false);
  const [accessKey, setAccessKey] = useState("");
  const [accessSecret, setAccessSecret] = useState("");
  const [region, setRegion] = useState("");
  const [bucket, setBucket] = useState("");

  const updateUploadedFiles = (files) => {
    setFiles(files);
    setShowUploadComplete(false);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const client = new S3Client({
      region: region,
      credentials: { accessKeyId: accessKey, secretAccessKey: accessSecret }
    });
    files.map(async file => {
      let output = await client.send(new UploadPartCommand({ Body: file.file, Bucket: bucket, Key: file.key }));
      output.$metadata.httpStatusCode === 200 ? console.log("success") : console.log("failed");
    })
    console.log("upload complete");
    setShowUploadComplete(true);
    setTimeout(() => setShowUploadComplete(false), 5000);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FileUpload
          accept=".csv"
          label="S3 File Uploader UI"
          multiple
          updateFilesCb={updateUploadedFiles}
        />
        <input type="password" name="bucket" placeholder="bucket" onChange={(event) => setBucket(event.target.value)}></input>
        <input type="password" name="region" placeholder="region" onChange={(event) => setRegion(event.target.value)}></input>
        <input type="password" name="accessKey" placeholder="access key" onChange={(event) => setAccessKey(event.target.value)}></input>
        <input type="password" name="secret" placeholder="access secret" onChange={(event) => setAccessSecret(event.target.value)}></input>
        <button type="submit" onClick={handleSubmit}>Upload to S3 bucket</button>
        {showUploadComplete ? <h2>Upload complete</h2> : null}
      </form>
    </div>
  );
}

export default Upload;
