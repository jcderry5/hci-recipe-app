import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignUp from './components/SignUp';
import RecipeBook from './components/RecipeBook';
import Profile from './components/Profile';
import MainMenu from './components/MainMenu';
import LogIn from './components/LogIn';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';

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
