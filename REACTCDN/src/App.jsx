import React from 'react';
import Header from './components/Header';
import NewsCard from './components/NewsCard';
import Footer from './components/Footer';

const App = () => {
  const news = [
    {
      title: "Notícia 1",
      description: "Descrição breve da notícia 1.",
      image: "https://via.placeholder.com/300x180",
    },
    {
      title: "Notícia 2",
      description: "Descrição breve da notícia 2.",
      image: "https://via.placeholder.com/300x180",
    },
    {
      title: "Notícia 3",
      description: "Descrição breve da notícia 3.",
      image: "https://via.placeholder.com/300x180",
    },
  ];

  return (
    <div>
      <Header />
      <div className="container">
        {news.map((article, index) => (
          <NewsCard key={index} {...article} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;


