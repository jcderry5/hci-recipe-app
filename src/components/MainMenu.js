import React, { useState } from "react"
import { Container, Row, Card } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate} from "react-router-dom"
import '../RecipeResults.css'
import rrLogo from '../images/rr.PNG'

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
          <div class = "main-menu-card">
            <div className="row">
            <div class="col" style={{display: 'flex', justifyContent: 'center'}}><b>Recipe Remix</b> </div> </div>
            <div className="row">
            <div class="col" style={{display: 'flex', justifyContent: 'center'}}><b>Welcome!</b> </div> </div>    
            <div className="row">
            <div class="col" style={{display: 'flex', justifyContent: 'center'}}><img id="logo" src={rrLogo} width="150" height="150"/> </div> </div>    
          </div>
        </Card.Body>
      </Card>}
      <Container>
      <Row>
          <Card as={Link} to="/hci-recipe-app/newrecipe">
            <Card.Title style={{ display: 'flex', justifyContent: 'center', padding: '15px' }}>Add a New Recipe</Card.Title>
          </Card>
        </Row>
        <Row>
          <Card as={Link} to="/hci-recipe-app/recipebook">
            <Card.Title style={{ display: 'flex', justifyContent: 'center', padding: '15px' }}>View Your Recipe Book</Card.Title>
          </Card>
        </Row>
        <Row>
          <Card as={Link} to="/hci-recipe-app/profile">
            <Card.Title style={{ display: 'flex', justifyContent: 'center', padding: '15px' }}>Update Profile</Card.Title>
          </Card>
        </Row>
      </Container>
      <div className="row" style={{display: 'flex', justifyContent: 'center'}}>
        <button onClick={handleLogout} className='border px-6 py-2 my-4' style={{display: 'flex', justifyContent: 'center', width: '50%'}}>
          Logout
        </button>
      </div>
      
    </>
  )
}