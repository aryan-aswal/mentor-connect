import React from 'react'
import pageNotFound from '../assets/404.png'
import { Link } from 'react-router-dom'
// import fullLogo from '../assets/full-logo.png'
const Error = () => {
  return (
    <section className='h-screen relative p-10 flex flex-col items-center text-center gap-20 justify-center'>
        <img src={pageNotFound} className="select-none border-2 border-grey w-72 aspect-square object-cover rounded" />
        <h1 className='text-4xl font-gelasio leading-'>Page Not Found</h1>
        <p className='text-dark-grey text-xl leading-7 -mt-8'>The page you are looking for does not exists. Head back to the <Link className="text-black underline" to={'/'}>Home Page</Link></p>
    </section>
  )
}

export default Error