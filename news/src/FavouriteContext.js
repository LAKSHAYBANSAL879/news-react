import React, { createContext, useState } from 'react';

export const FavouriteContext = createContext();

export const FavouriteProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const addToFavourites = (article) => {
    
    setFavourites((prevFavourites) => [...prevFavourites, article]);
  };

  const removeFromFavourites = (url) => {
    setFavourites((prevFavourites) =>
      prevFavourites.filter((article) => article.url !== url)
    );
  };

  return (
    <FavouriteContext.Provider value={{ favourites, addToFavourites, removeFromFavourites }}>
      {children}
    </FavouriteContext.Provider>
  );
};
