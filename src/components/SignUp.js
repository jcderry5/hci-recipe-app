import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const { signIn } = useAuth();
    const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signIn(email, password);
      navigate('/hci-recipe-app')
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
                <div className='flex flex-col py-2'>
                <label className='py-2 font-medium'>Email Address</label>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    className='border p-3'
                    type='email'
                />
                </div>
                <div className='flex flex-col py-2'>
                <label className='py-2 font-medium'>Password</label>
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    className='border p-3'
                    type='password'
                />
                </div>
                <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'>
                Sign Up
                </button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/hci-recipe-app/login">Log In</Link>
      </div>
    </>
  )
}

