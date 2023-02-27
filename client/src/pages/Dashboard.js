import React, { useState } from 'react';

const Dashboard = () => {

  // const Profile = () => {
    const [name, setName] = useState('John Doe');
    const [email, setEmail] = useState('john.doe@example.com');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState('');
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    }
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    }
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    }
  
    const handleImageChange = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImage(reader.result);
      };
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Make API call to update user profile with new information
      fetch('https://api.example.com/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
          image,
        }),
      })
        .then(response => response.json())
        .then(data => console.log(data));
    }
  return (
    <>
      <div className="container">

      <div>
      <h1>My Profile</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div>
          <label>Profile Picture:</label>
          <input type="file" onChange={handleImageChange} />
          {image && <img src={image} alt="Profile" />}
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
      </div>
    </>
  )
}

export default Dashboard
