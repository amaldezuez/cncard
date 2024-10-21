import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
    <div className='vh-100' style={{background:"black"}}>
    <div className='container row'>
    <div className='col-sm-6 col-12'>
        <img className='me-5' src="https://media3.giphy.com/media/ggtpYV17RP9lTbc542/giphy.webp?cid=ecf05e476ty6vv7b74l5bet3ydsq7da74uy1ktcmk93qex8j&ep=v1_gifs_search&rid=giphy.webp&ct=g" width='100%' height='100%' alt="" />
    </div>
    <div className=' mt-5 col-12 col-sm-6 align-items-center justify-content-center d-flex'>
        <div className='d-flex justify-content-center align-items-center flex-column mt-5'>
        <Link to='/create' className='btn btn-success px-4 '>Create New Contact</Link>
        <Link to='/home' className='btn btn-danger mt-5 px-5'>View Card</Link>
        </div>
    </div>
    
    </div>
    
         
    </div>
    </>
  )
}

export default Landing
