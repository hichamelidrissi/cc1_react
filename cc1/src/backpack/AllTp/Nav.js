import React from 'react'
import { Link } from 'react-router-dom'
import "./nav.css"

export default function NavResp(props) {
    
  return (
    <nav>
        <ul className="row mr-auto mt-2 mt-lg-0 d-flex justify-content-center">
            <li className='col-2'>
                <Link to="/" className='bg-light'>Home</Link>
            </li>
            <li  className='col-2'>
                <Link to="/calculator" className='bg-light'>calculator</Link>
            </li>
            <li className="col-2">
                <Link to="/Slider" className='bg-light'>Slider</Link>
            </li>
            <li className="col-2">
                <Link to="/todo" className='bg-light'>todo</Link>
            </li>
            <li className="col-2">
                <Link to="/API" className='bg-light'>Api</Link>
            </li>
        </ul>
    </nav>
  )
}
