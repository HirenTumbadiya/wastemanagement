import React from 'react';
import Card from '../components/Card';
import Schedule from "../components/Schedule";
import './css/Home.css';

const Home = () => {
  return (
    <>
    <div className="zero-waste">
    <div className='bg="light" mt-5'>
        <h1 className='mx-auto' style= {{width: 300}}>Zero Waste</h1>
        <p className='mx-auto' style= {{width: 800}}>Reuse, recycle, and reduce the waste for a better future. Increase greenery by recycling waste. Save earth by reusing, recycling waste. Waste isn't waste until we waste.</p>
        <div className='d-flex mt-5 p-5 flex-column flex-sm-row'>
        <img
          className="h-50 mx-auto"
          style={{width: "42rem"}}
          src="https://images.unsplash.com/photo-1523293915678-d126868e96f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="First slide"
        />
        <img
          className="h-80 mx-auto"
          style={{width: "42rem"}}
          src="https://images.unsplash.com/photo-1547984556-0469ba3fa4e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1457&q=80"
          alt="First slide"
        />
        </div>
        </div>
    </div>
    <div className="impact">
        <h1>Our Impact</h1>
        <p>Zero waste is making social, economic, and environmental impacts in the cities it operates.</p>
    <div className='Card d-flex flex-column flex-sm-row align-items-center align-items-sm-center'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
    </div>
    <div className="schedule mx-5 my-5 py-5">
      <div className='text-center mt-5'>
      <h1>Schedule Pickup</h1>
      <p>for an waste collection</p>
      </div>
      <div>
        {/* <Schedule/> */}
      </div>

    </div>
    <div className="solution">
    <h1>Solution We Provide</h1>
        <p>We Collect Your Waste And Recycle that waste. You Just have to collect we give you Rewards. Redeem that and keep place clean.</p>
    <div className='Card d-flex flex-column flex-sm-row align-items-center align-items-sm-center'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
    </div>
    {/* <div className="poster"> */}
      {/* <img src="https://img.freepik.com/free-vector/environmental-agency-poster-with-information-waste-collection-sorting-recycling_1284-8959.jpg?1&w=740&t=st=1675238768~exp=1675239368~hmac=7281835309088ee8e177a540f5a7bd4fd306070aeadc9a21def693de417aad73" */}
      {/* alt="poster"> */}
    {/* </div> */}
    </>
  )
}

export default Home
