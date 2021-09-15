import React from 'react';

function Card({person}) {
  return(
    <div className="search-wrapper">
      <img className="search-img" src={item.img} />
      <div>
        <div>{item.name}</div>
        <div>{item.title}</div>
        <div>{item.rating}</div>
        <div>{item.cost}</div>
      </div>
      <div className="search-close-btn"></div>
    </div>
  );
}

export default Card;