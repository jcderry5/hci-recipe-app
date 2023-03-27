import React from 'react';
import SignUp from './SignUp'
import RecipeBook from './RecipeBook'
import Profile from './Profile'
import MainMenu from './MainMenu'
import LogIn from './LogIn'
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';



function App() {

    return (
      
      <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route exact path="/" element={<ProtectedRoute><MainMenu/></ProtectedRoute>} />
              <Route path="/signup" element={<SignUp/>} />
              <Route path="/login" element={<LogIn/>} />
              <Route path="/recipebook" element={<RecipeBook/>} />
              <Route path="/profile" element={<Profile/>} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </div>
    </Container>
  )
    
  
  
}
export default App
