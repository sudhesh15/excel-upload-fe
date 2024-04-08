import React, { useState } from 'react';
import {BASE_URL} from "../url";

function HomePage() {
  const [file, setFile] = useState(null);
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      fetch(`${BASE_URL}/upload`, {
        method: 'POST',
        body: formData
      })
      .then(response => {
        alert('File uploaded successfully');
      })
      .catch(error => {
        alert('Error uploading file:', error);
      });
    } else {
      alert('No file selected');
    }
  };
  return (
    <form className="home-page homeTop" onSubmit={handleSubmit}>
      <div className="form">
        <h3>EXCEL UPLOADER</h3>
        <input type="file" accept=".xlsx, .csv" onChange={handleFileChange}/>
        <button type="submit">SUBMIT</button>
      </div>
    </form>
  )
}

export default HomePage
