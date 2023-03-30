import React from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



import SignUp from './components/SignUp';
import RecipeBook from './components/RecipeBook';
import Profile from './components/Profile';
import MainMenu from './components/MainMenu';
import LogIn from './components/LogIn';
import NewRecipe from './components/NewRecipe';
import RecipeSummaryAgain from './components/RecipeSummaryAgain';
import ViewRecipe from './components/ViewRecipe';
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
              <Route exact path="/hci-recipe-app" element={<ProtectedRoute><AppHeader/><MainMenu/></ProtectedRoute>} />
              <Route path="/hci-recipe-app/signup" element={<><AppHeader/><SignUp/></>} />
              <Route path="/hci-recipe-app/login" element={<><AppHeader/><LogIn/></>} />
              <Route path="/hci-recipe-app/recipebook" element={<ProtectedRoute><AppHeader/><RecipeBook  /></ProtectedRoute>} />
              <Route path="/hci-recipe-app/profile" element={<ProtectedRoute><AppHeader/><Profile/></ProtectedRoute>} />
              <Route path="/hci-recipe-app/newrecipe" element={<ProtectedRoute><AppHeader/><NewRecipe/></ProtectedRoute>} />
              <Route path="/hci-recipe-app/viewrecipe" element={<ProtectedRoute><AppHeader/><ViewRecipe/></ProtectedRoute>} />
              <Route path="/hci-recipe-app/recipesummaryagain" element={<ProtectedRoute><AppHeader/><RecipeSummaryAgain/></ProtectedRoute>} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </div>
    // </Container>
  )
    
  
  
}
export default App