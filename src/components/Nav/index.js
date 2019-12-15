import React from 'react'
import "./style.css";




function Nav(){
  return (
    
   
<div className="header"> 
  <div className="nav-content">
    <ul className="tabs tabs-transparent">
      <li className="tab purple"><a className="active" href="/About">Login</a></li>
      <li className="tab purple"><a className="active" href="/Contact">Deck</a></li>
      <li className="tab purple"><a className="active" href="/More Info">Battle</a></li>
      <li className="tab purple"><a className="active" href="/Schedule">Battle</a></li>
      <li className="tab purple"><a className="active" href="/Operation Hours">Battle</a></li>






    </ul>
  </div>

  <div className="App-header">
  <h1 className="title">Backworld</h1>
  </div>


  </div>
 
  )
}
export default Nav;