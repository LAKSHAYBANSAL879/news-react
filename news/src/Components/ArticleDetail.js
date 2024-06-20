import React from 'react';
import { useParams } from 'react-router-dom';

const convertToIST = (dateString) => {
  const date = new Date(dateString);
  const options = {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };
  return date.toLocaleString('en-IN', options);
};

const ArticleDetail = ({ articles }) => {
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title);
  const article = articles.find(article => article.title === decodedTitle);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="container ml-auto p-4">
      <h1 className="text-2xl font-bold mb-4 ml-auto">{article.title}</h1>
      <p>{article.author} / {convertToIST(article.publishedAt)}</p>
      {article.urlToImage ? (
        <img
          src={article.urlToImage}
          alt={article.title}
          className="w-1/2 mx-auto object-cover rounded mb-4"
        />
      ) : (
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.35WLwdKW0LzjmByXmNbGiQHaE8&pid=Api&P=0&h=180"
          alt="Default Image"
          className="w-full h-48 object-cover rounded mb-4"
        />
      )}
      <p className="text-lg">{article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
        Read full article
      </a>
    </div>
  );
};

export default ArticleDetail;
