import React, { useState, useEffect } from 'react';
import NewsList from './Components/NewsList';
import Pagination from './Components/Pagination';
import CategorySelector from './Components/CategorySelector';
import SearchBar from './Components/SearchBar';
import Country from './Components/Country';
import { FavouriteProvider } from './FavouriteContext';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import BrowserRouter as Router and Routes
import FavoritesPage from './Components/FavouritePage';
import ArticleDetail from './Components/ArticleDetail';

const BASE_URL = 'http://localhost:5000/api'; 

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [category, setCategory] = useState('general');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [country, setCountry] = useState('in');

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);

      let url = `${BASE_URL}/top-headlines?country=${country}&category=${category}&page=${currentPage}`;
      if (searchKeyword) {
        url = `${BASE_URL}/everything?q=${searchKeyword}&page=${currentPage}`;
      }

      const response = await fetch(url);
      const data = await response.json();
      setArticles(data.articles);
      setTotalResults(data.totalResults);
      setLoading(false);
    };

    fetchArticles();
  }, [currentPage, category, searchKeyword, country]);

  return (
    <FavouriteProvider>
      <Router>
        <div className="container p-4 mx-auto">
          <h1 className="text-3xl font-bold mb-4 text-center">Daily News</h1>
          <div className="text-center mb-4">
            <Link to="/" className="mr-4">Home</Link>
            <Link to="/favorites">Favorites</Link>
          </div>
          <Routes>
            <Route path="/" element={
              <>
                <h2 className="text-xl font-semibold mb-4 text-center">
                  {searchKeyword ? `Search results for "${searchKeyword}"` : `Currently showing ${category} news`}
                </h2>
                <SearchBar setSearchKeyword={setSearchKeyword} setCurrentPage={setCurrentPage} />
                <div className='flex flex-row justify-around'>
                <CategorySelector setCategory={setCategory} />
                <Country setCountry={setCountry} setCurrentPage={setCurrentPage} />
                </div>
                <NewsList articles={articles} loading={loading} />
                <Pagination
                  totalResults={totalResults}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              </>
            } />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/article/:title" element={<ArticleDetail articles={articles} />} />
          </Routes>
        </div>
      </Router>
    </FavouriteProvider>
  );
}

export default App;