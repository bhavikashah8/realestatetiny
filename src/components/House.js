import React, { useState, useEffect } from "react";

import "./house.css";
// import icons
import { BiBed, BiBath, BiArea } from 'react-icons/bi';
import { FaHeart ,FaRegHeart} from "react-icons/fa";

import { housesData } from '../data';
import { Link } from "react-router-dom";
import Fav from "./Fav";

const House = ({ house }) => {
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
    <>  
     
    
    {favorites.map((item, i) => (
    <div className='container' key={i}>
      <img className='image' src={house.image} alt='' />
      <div className='container2'>
        <div className='house'>
          {house.type}
        </div>
        <div className='country'>
          {house.country}
        </div>
        
        
            <button
              onClick={() => {
                handleFavorite(item.id);
              }}
            >
              {item.favorite === true ? <FaHeart/> : <FaRegHeart/>}
            </button>
        
      
      </div>
      <div className='address'>{house.address}</div>
      <div className='container3'>
        <div className='container4'>
          <div className='container5'>
            <BiBed />
          </div>
          <div className='text-base'>{house.bedrooms}</div>
        </div>
        <div className='container4'>
          <div className='container5'>
            <BiBath />
          </div>
          <div className='text-base'>{house.bathrooms}</div>
        </div>
        <div className='container4'>
          <div className='container5'>
            <BiArea />
          </div>
          <div className='text-base'>{house.surface}</div>
        </div>
      </div>
      <div className='price'>
        $ {house.price}
      </div>
    </div>
    ))}
    <h1>FA</h1>
    {favorites.map(item =>
          item.favorite === true ? <div className='container'>
          <img className='image' src={house.image} alt='' />
          <div className='container2'>
            <div className='house'>
              {house.type}
            </div>
            <div className='country'>
              {house.country}
            </div>
            
            
                <button
                  onClick={() => {
                    handleFavorite(item.id);
                  }}
                >
                  {item.favorite === true ? <FaHeart/> : <FaRegHeart/>}
                </button>
            
          
          </div>
          <div className='address'>{house.address}</div>
          <div className='container3'>
            <div className='container4'>
              <div className='container5'>
                <BiBed />
              </div>
              <div className='text-base'>{house.bedrooms}</div>
            </div>
            <div className='container4'>
              <div className='container5'>
                <BiBath />
              </div>
              <div className='text-base'>{house.bathrooms}</div>
            </div>
            <div className='container4'>
              <div className='container5'>
                <BiArea />
              </div>
              <div className='text-base'>{house.surface}</div>
            </div>
          </div>
          <div className='price'>
            $ {house.price}
          </div>
        </div> : null
        )}
    </>

  );

};

export default House;
