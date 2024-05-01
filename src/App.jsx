import './App.css'
import Footer from "./components/Footer/Footer"
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import { createContext, useState } from 'react'
import Book from './components/Book/Book'
import {Routes, Route } from 'react-router-dom'
export const ThemeContext = createContext()
function gettheme() {
  const theme = localStorage.getItem('theme')
  return theme ? JSON.parse(theme) : 'light'
}
function App() {
  const [theme, setTheme] = useState(gettheme)
  return (
    <ThemeContext.Provider>
      <div className='App' id={theme}>
        <Nav theme={theme} setTheme={setTheme} />
          <Routes>
            <Route path='/deploy_react_app_github_pages_vercel' element={<Home />} />
            <Route path="/details/:id" element={<Book theme={theme}/>} />
          </Routes>
        <Footer />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
