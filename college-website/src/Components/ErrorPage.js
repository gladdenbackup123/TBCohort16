import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
        <h1>Error 404!</h1>
        <p>The page you are looking for is not found.</p>

        <div>
            <Link to="/">Go to Home</Link>
            <br/>
            <Link to="/about">Go to About</Link>
            <br/>
            <Link to="/campus">Go to Campus</Link>
        </div>
    </div>
  )
}

export default ErrorPage
