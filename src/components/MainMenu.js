import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate} from "react-router-dom"

export default function MainMenu() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  //console.log(user.uid)
  const handleLogout = async () => {
    try {
      await logout();
      navigate('/hci-recipe-app/login');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <> 
      {<Card>
        <Card.Body>
        <div className="row">
        <div class="col-6" style={{display: 'flex', justifyContent: 'left'}}><b>Menu</b> </div> </div>
        <div className="row">
        <div class="col-6" style={{display: 'flex', justifyContent: 'center'}}><b>Recipe Remix</b> </div> </div>
        <div className="row">
        <div class="col-6" style={{display: 'flex', justifyContent: 'center'}}><b>Welcome!</b> </div> </div>    
        <div className="row">
        <div class="col-6" style={{display: 'flex', justifyContent: 'center'}}><b>Logo Will Go Here</b> </div> </div>    
        </Card.Body>
      </Card>}
      <div className="w-100 text-center mt-2" style={{ display: 'flex', justifyContent: 'center' }}>
                <Link to="/hci-recipe-app/recipebook">View Your Recipe Book</Link>
            </div>
            <div className="w-100 text-center mt-2" style={{display: 'flex', justifyContent: 'center'}}>
                <Link to="/hci-recipe-app/profile">Update Profile</Link>
            </div>
            <button onClick={handleLogout} className='border px-6 py-2 my-4' style={{display: 'flex', justifyContent: 'center'}}>
        Logout
      </button>
    </>
  )
}