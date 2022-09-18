import React, { useState, useEffect } from "react";

import "./house.css";
// import icons
import { BiBed, BiBath, BiArea } from 'react-icons/bi';
import { FaHeart ,FaRegHeart} from "react-icons/fa";

import { housesData } from '../data';


const Fav = ({ house }) =>  {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(housesData);
  }, []);

  useEffect(() => {
    console.log(favorites);
  }, [favorites]);

  function handleFavorite(id) {
    const newFavorites = favorites.map(item => {
      return item.id === id ? { ...item, favorite: !item.favorite } : item;
    });

    setFavorites(newFavorites);
  }

  return (
    <div className="App">
      <ul>
        
        </ul>
    </div>
  );
}
export default Fav;
