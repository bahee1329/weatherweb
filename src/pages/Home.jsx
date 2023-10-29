import React from 'react';
import cold from '../assets/2.jpg'; 
import Search from '../components/Search'
import Colombocon from '../components/Colombocon';
import Days from '../components/Days';
import Navbar from '../components/Navbar'


function Home() {
  return (
    <div className="App" style={{ backgroundImage: `url(${cold})` }}>
      
      <Navbar/>
      <Search/>
      <Colombocon/>
      <Days/>
      
      
    </div>
  );
}

export default Home;
