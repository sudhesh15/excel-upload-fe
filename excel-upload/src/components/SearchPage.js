import React, { useState } from 'react';
import {BASE_URL} from "../url";

function SearchPage() { 
  const [username, setUsername] = useState('');
  const [policyDetails, setPolicyDetails] = useState('');

  const handleSubmit = async (event) => {
  event.preventDefault();
  try {
    const response = await fetch(`${BASE_URL}/search/${username}`);
    const data = await response.json();
    setPolicyDetails(JSON.stringify(data));
    console.log("policyDetails===>",data)
  } catch (error) {
    console.error('Error fetching policy details:', error);
  }
};

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <form className="home-page homeTop" onSubmit={handleSubmit}>
      <div className="form">
        <h3>SEARCH POLICY DETAILS</h3>
        <input
          type="text"
          placeholder="Enter Username..."
          value={username}
          onChange={handleUsernameChange}
        />
        <button type="submit">SUBMIT</button>
        {policyDetails && (
          <div>
            <h4>POLICY DETAILS:</h4>
            <textarea value={policyDetails} readOnly  style={{ width: "250px", height: "250px" }} />
          </div>
        )}
      </div>
    </form>
  )
}

export default SearchPage
