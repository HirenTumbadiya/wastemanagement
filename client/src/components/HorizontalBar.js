import React from 'react'
import { BsFillFilePersonFill, BsGiftFill } from 'react-icons/bs';
import { FaMailBulk } from 'react-icons/fa';
import { IoLogOutOutline } from 'react-icons/io5';
import { GrUserSettings } from 'react-icons/gr';
import { RiRoadMapLine } from 'react-icons/ri';

const HorizontalBar = () => {
  return (
    <>
        <div className="container">
            <div className='d-flex justify-content-center h4 ' style={{gap:"125px"}}>
                <a href="" className='link-unstyled'><BsFillFilePersonFill/></a>
                <a href="/rewards" className='link-unstyled'><BsGiftFill/></a>
                <a href="" className='link-unstyled'><FaMailBulk/></a>
                <a href="" className='link-unstyled'><RiRoadMapLine/></a>
                <a href="" className='link-unstyled'><GrUserSettings/></a>
                <a href="" className='link-unstyled'><IoLogOutOutline/></a>
            </div>
        </div>
    </>
  )
}

export default HorizontalBar
