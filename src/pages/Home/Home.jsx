import React, { useState } from 'react'
import './Home.css'
import Headder from '../../components/Navbar/Headder/Headder'
import ExploreMenu from '../../components/Navbar/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/Navbar/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/Navbar/AppDownload/AppDownload'

const Home = () => {
  const[category,setCategory]=useState("All")
  return (
    <div>
      <Headder/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home
