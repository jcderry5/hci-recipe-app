
import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignUp from './components/SignUp';
import RecipeBook from './components/RecipeBook';
import Profile from './components/Profile';
import MainMenu from './components/MainMenu';
import DisplayRecipeResults from './DisplayRecipeResults'
import LogIn from './components/LogIn';
import NewRecipe from './components/NewRecipe';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';
import AppHeader from './components/header/AppHeader';

function App() {
  const [isMenuActive, activeMenu] = useState(false)
    return (

      <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
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
    </Container>
  )
}
export default App
