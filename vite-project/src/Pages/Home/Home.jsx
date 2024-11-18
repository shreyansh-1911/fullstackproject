import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownLoad from '../../components/AppDownload/AppDownLoad';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
const Home = () => {
  const [category,setCategory] = useState("All");
  return (
    <>
      <Navbar/>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownLoad/>
      <Footer/>
    </>
  )
}

export default Home
