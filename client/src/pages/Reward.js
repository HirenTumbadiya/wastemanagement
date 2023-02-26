import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from "../components/Card"

const Reward = () => {
  return (
    <div className='container m-5'>
      <div className="">

      </div>
      <div className="d-flex">
        <div className="w-25 p-5 bg-light">
            <h2 className='fw-normal'> <span className='lighten-10 fw-bold'>1305</span> <br /> Reward Points</h2>
            <p className='pt-3 mt-5'>250points = 5rupees<br />
            Redeem in checkout</p>
            <Button variant="outline-success">Redeem Now</Button>
        </div>
        <div className="w-75 p-5 bg-info">
            <h2 className='fw-normal'> <span className='lighten-10 fw-bold'>5100</span> <br />Tier Points</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, fugit!</p>
        </div>
      </div>
      <div>
        <h2 className='p-5'>Transaction History</h2>
        <div className="d-flex p-5">
            <div className='w-25'>
                <h6>Transaction Details</h6>
            </div>
            <div className='w-25'>
                <h6>Date</h6>
            </div>
            <div className='w-25'>
                <h6>Reward Points</h6>
            </div>
            <div className='w-25'>
                <h6>Tier Points</h6>
            </div>
        </div>
      </div>
      <div>
        <h2 className='p-5'>Available Rewards</h2>
        <div className='p-5'>
            <Card/>
        </div>
      </div>
    </div>
  )
}

export default Reward
