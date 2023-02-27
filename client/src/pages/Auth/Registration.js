import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';

const RegistrationPage1 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) =>{
    setFormData({ ...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch ("http://localhost:5000/api/users/register",{
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if(!response.ok){
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      navigate('/login')
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <div className="d-flex justify-content-center align-items-center" style={{marginTop:"150px"}}>
    <form className="bg-light border shadow " method="post" style={{width: "500px", borderRadius: "25px"}} onSubmit={handleSubmit}>
        <h3 className="p-3 m-3 text-center text-light" style={{backgroundColor: "darkgreen", boxShadow:"5px 10px #888888", borderRadius: "9px"}}>Sign Up</h3>
        <div className="mb-3 card-body">
          <label className="mx-3">Name</label>
          <input
            type="text"
            className="form-control m-3 w-75"
            placeholder="Name"
            name="name" value={formData.name} onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="mx-3">Email address</label>
          <input
            type="email"
            className="form-control m-3 w-75"
            placeholder="Enter email"
            name="email"  value={formData.email} onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="mx-3">Password</label>
          <input
            type="password"
            className="form-control m-3 w-75"
            placeholder="Enter password"
            name="password"  value={formData.password} onChange={handleChange}
          />
        </div>
        <div className="d-flex justify-content-between mb-3">
        <Button className="mx-3 w-25" variant="outline-success" type="submit">Submit</Button>
        <p className="mx-3 ">
          Already registered <a className="shadow" href="/login">sign in?</a>
        </p>
        </div>
      </form>
      </div>
    </>
  );
};

export default RegistrationPage1;
