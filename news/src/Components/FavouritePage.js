import React, { useContext } from 'react';
import { FavouriteContext } from '../FavouriteContext';
import NewsList from './NewsList';

const FavoritesPage = () => {
  const { favourites, removeFromFavourites } = useContext(FavouriteContext);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-center">Favorite News</h1>
      <NewsList articles={favourites} loading={false} inFavoritesPage removeFromFavourites={removeFromFavourites} />
    </div>
  );
};

export default FavoritesPage;
