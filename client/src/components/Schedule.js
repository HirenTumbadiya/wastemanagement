import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const today = new Date();

function Pickup() {
    const [startDate, setStartDate] = useState(today);
    const [value, setValue] = useState()
  return (
    <>
    <div className="schedule-container">
    <Form className="d-flex form-inline flex-column flex-sm-row" style={{marginLeft: "251px", marginTop: "60px"}}>
      <Form.Group className="mx-md-5 mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Full Name" />
      </Form.Group>

      <Form.Group className="mx-sm-5 mb-3" controlId="formBasicPassword">
      <PhoneInput
      placeholder="Enter phone number"
      value={value}
      onChange={setValue}/>
      </Form.Group>
      <Form.Group className="mx-sm-5 mb-3 " controlId="formBasicCheckbox">
      <DatePicker
      showIcon
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      />
      </Form.Group>
    </Form>
    <Form.Group className="form-control mb-3 " controlId="formBasicEmail" style={{width: "820px", marginLeft: "300px"}}>
        <Form.Control type="textarea" placeholder="Message"  />
      </Form.Group>
      <Button className='btn' variant="outline-success" type="submit" style={{marginLeft: "700px"}}>
        Order Pickup
      </Button>
      </div>
      </>
  );
}

export default Pickup;