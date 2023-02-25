import React from 'react'
import Card from "../components/Card"
import "../.scss"
import Button from 'react-bootstrap/Button';
import image from "./about_heading.jpg"

const AboutUs = () => {
  return (
    <>
      
      <div className="container mt-5">
        <div>
          <img className='bg-gradient bg-dark w-100 position-relative' src={image} alt="" />
        </div>
        <header className='w-50 mt-5 p-5 align-items-center position-absolute top-0' style={{color: "white"}}>
          <h4>WHO WE ARE</h4>
          <h1>So Much <span style={{color:'yellow'}}>More</span> Than <br /> "Managing Waste"</h1>
          <p>Focused on people, service and sustainability, WM is doing things the right way today so we can all share in a better tomorrow.</p>
        </header>
        <div className="p-5 d-flex">
          <div className="w-50 p-5">
            <img className='w-100' src="https://images.unsplash.com/photo-1609234656388-0ff363383899?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" alt="" />
          </div>
          <div className='w-50 p-5'>
          <h1>
          Leading the Way
          </h1>
          <p>
          Our leadership serves with a focus on maximizing resource value while minimizing environmental impact so that both our economy and environment can thrive.
          </p>
          <Button variant="outline-success">Meet our Leadership Team</Button>
          </div>
        </div>
        <div className='d-flex w-100'>
          <div className='w-50 p-5'>
            <h6 className='text-muted'>DRIVEN BY OUR</h6>
            <h1 className='darken-10'>Commitments</h1>
            <h6>Our People First</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui corporis pariatur harum consequatur dolorum reiciendis perferendis nisi? Accusantium ratione commodi dicta earum, dolores reprehenderit magnam.</p>
            <h6>Success With Integrity</h6>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, magni enim? Voluptatum ea error obcaecati explicabo ducimus consectetur labore, numquam esse quis amet facilis possimus distinctio illo totam odit necessitatibus.</p>
          </div>
          <div className='w-50 p-5'>
            <h6 className='text-muted'>GUIDED BY OUR</h6>
            <h1 className='darken-10'>Core Values</h1>
            <h6>Inclusion & Diversity</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda libero sunt ex officiis consequatur voluptatibus dolorem, fugiat quia itaque, unde sit doloribus a. Et, totam.</p>
            <h6>Customers</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda libero sunt ex officiis consequatur voluptatibus dolorem, fugiat quia itaque, unde sit doloribus a. Et, totam.</p>
            <h6>Safety</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda libero sunt ex officiis consequatur voluptatibus dolorem, fugiat quia itaque, unde sit doloribus a. Et, totam.</p>
            <h6>Environment</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda libero sunt ex officiis consequatur voluptatibus dolorem, fugiat quia itaque, unde sit doloribus a. Et, totam.</p>
          </div>
        </div>
          <div className="p-5">
            <h1 className='darken-10'>Explore More of Who We Are</h1>
            <div className='p-5 d-flex' style={{gap: "125px"}}>
            <Card className=""/>
            <Card/>
            <Card/>
            </div>
          </div>
          <div className="p-5">
            <div className='p-5 text-center'>
            <h1 className='mb-5 darken-10'>Interested in joining Our Company?</h1>
            <Button variant="outline-success">Explore Career</Button>
            </div>
          </div>
      </div>
    </>
  )
}

export default AboutUs
