import React from 'react'
import Navbar from '../../Components/navbar/Navbar'
import SelectedItem from '../../Components/selectedItem/SelectedItem'
import Item from '../../FoodItem/Item'
import "./home.css"
const Home = () => {
  return (
    <>
    <div className="home_main">
      <div className="home">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="item">
          <Item /></div>
        <div className="selectItem">
          <SelectedItem />
        </div>
        </div>
      </div>
    </>
  )
}

export default Home
