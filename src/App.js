import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



import SignUp from './components/SignUp';
import RecipeBook from './components/RecipeBook';
import Profile from './components/Profile';
import MainMenu from './components/MainMenu';
import LogIn from './components/LogIn';
import NewRecipe from './components/NewRecipe';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';
import AppHeader from './components/header/AppHeader';

function App() {
    return (

    // I commented out this container because it was causing weird bars on the side.
    // I don't see any downsides to doing this but if there are please tell me and I
    // will figure out a way to fix it
    //   <Container
    //   className="d-flex justify-content-center"
    //   style={{ minHeight: "100vh" }}
    // >
      <div className="w-100" style={{ maxWidth: "800px" }}>
        
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route exact path="/" element={<ProtectedRoute><AppHeader/><MainMenu/></ProtectedRoute>} />
              <Route path="/signup" element={<><AppHeader/><SignUp/></>} />
              <Route path="/login" element={<LogIn/>} />
              <Route path="/recipebook" element={<><AppHeader/><RecipeBook/></>} />
              <Route path="/profile" element={<><AppHeader/><Profile/></>} />
              <Route path="/newrecipe" element={<><AppHeader/><NewRecipe/></>} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </div>
    // </Container>
  )
    
  
  
}
export default App