import React, { useRef, useState } from "react"
import {Form, Button, Card } from 'react-bootstrap'
import { Link, useNavigate} from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"


export default function Login() {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      navigate('/')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  };

    return (
        <>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Log In</h2>
              <Form onSubmit={handleSubmit}>
              <div className='flex flex-col py-2'>
                <label className='py-2 font-medium'>Email Address</label>
                <input onChange={(e) => setEmail(e.target.value)} className='border p-3' type='email' />
                </div>
                <div className='flex flex-col py-2'>
                <label className='py-2 font-medium'>Password</label>
                <input onChange={(e) => setPassword(e.target.value)} className='border p-3' type='password' />
                </div>
                <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'>
                Log In
                </button>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
                Need an account? <Link to="/signup">Sign Up</Link>
            </div>
        </>
      )
}