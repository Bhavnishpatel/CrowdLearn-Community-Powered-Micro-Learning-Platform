import React from 'react'
import NavBar from './components/NavBar'
import HomeHero from './components/HomeHero'
import Categories from './components/CategoriesComponent'

const App = () => {
  return (
    <div>
      <NavBar />
      <HomeHero />
      <Categories />
    </div>
  )
}

export default App