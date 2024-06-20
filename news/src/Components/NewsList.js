import React, { useContext } from 'react';
import { FavouriteContext } from '../FavouriteContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const NewsList = ({ articles, loading, inFavoritesPage, removeFromFavourites }) => {
  const { addToFavourites, removeFromFavourites: remove } = useContext(FavouriteContext);

  const handleAddToFavorites = (article) => {
    toast.success("News added to favorites successfully");
    addToFavourites(article);
  };

  const handleRemoveFromFavorites = (article) => {
    toast.warning("News removed from favorites successfully");
    removeFromFavourites(article.url);
  };

  if (loading) {
    return <h2 className="text-center">Loading...</h2>;
  }

  return (
    <div className='ml-auto'>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="w-full flex flex-wrap gap-3 justify-center">
        {articles.map((article, index) => (
          <div key={index} className="border p-4 rounded shadow w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            {article.urlToImage ? (
              <img
                src={article.urlToImage}
                alt={article.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
            ) : (
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.35WLwdKW0LzjmByXmNbGiQHaE8&pid=Api&P=0&h=180"
                alt="Default Image"
                className="w-full h-48 object-cover rounded mb-4"
              />
            )}
            <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
            <p className="mb-2 text-gray-700">{article.description}</p>
            <div className='flex flex-row justify-around'>
            <Link to={`/article/${encodeURIComponent(article.title)}`} className="text-blue-500">
            Read More
          </Link>
            {!inFavoritesPage && (
              <button
                onClick={() => handleAddToFavorites(article)}
                className="mt-2 p-2 bg-green-500 text-white rounded ml-2"
              >
                Add to Favourites
              </button>
            )}
            {inFavoritesPage && (
              <button
                onClick={() => handleRemoveFromFavorites(article)}
                className="mt-2 p-2 bg-red-500 text-white rounded ml-2"
              >
                Remove from Favorites
              </button>
            )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsList;

