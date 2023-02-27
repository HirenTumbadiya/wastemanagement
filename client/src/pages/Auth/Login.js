import { React, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from 'react-bootstrap/Button';


const RegistrationPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
try {
  

    const response = await axios.post( 'http://localhost:5000/api/users/login', {
      email,
      password,
    });
    const token = response.data.token;
    localStorage.setItem('token',token);
    navigate('/')
  } catch (error) {
    console.error(error);
  }

    // handle successful login
  }

  return (
    <>
    <form onSubmit={handleSubmit} className="h-50 p-5 border border=dark align-items-center shadow" style={{margin: "180px 350px 150px", backgroundColor: "white"}}>
        <h3 className="text-center text-light mb-5" style={{backgroundColor: "darkgreen", boxShadow:"5px 10px #888888", borderRadius: "9px"}}>Welcome Back</h3>
        <div className="mb-4 px-5 mx-5">
          <label className="mb-1">Email address</label>
          <input
            type="email"
            value={email}
            className="form-control w-75"
            placeholder="Enter email"
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
        </div>
        <div className="mb-3 px-5 mx-5">
          <label className="mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            className="form-control w-75"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox mx-5 px-5">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
              
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-flex" style={{justifyContent: "center", gap:"200px"}}>
        <Button variant="outline-success" type="submit">Submit</Button>
        <Button variant="outline-success">Forgot Password?</Button>
        </div>
      </form>
    </>
  );
};

export default RegistrationPage;
