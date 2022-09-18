import React from 'react';

// import components
import HouseList from '../components/HouseList';
import Banner from '../components/Banner';

const Home = () => {
  return (
    <div classame="home" style={{minHeight: "1800px"}}>
      <Banner />
      <HouseList />
    </div>
  );
};

export default Home;
