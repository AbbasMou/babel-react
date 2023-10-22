import React, { useState, useEffect } from 'react';
import CategoryCard from './CategoryCard';
import "../css/NewsCards.css";
import 'bootstrap/dist/css/bootstrap.min.css';


import news1 from '../images/news1.jpg';
import news2 from '../images/news2.jpg';
import news3 from '../images/news3.jpg';
import news4 from '../images/news4.jpg';
import news5 from '../images/news5.jpg';



function NewsCards({ categories, onButtonClick, onStoreClick }) {
  const [clicksPer24, setClicksPer24] = useState([]);
  const [sortedCategories, setSortedCategories] = useState([]);

  useEffect(() => {
    const getClicksPer24 = async () => {
      const responses = await Promise.all(categories.map(async (category) => {
        const response = await fetch("http://127.0.0.1:8000/api/aggregates/" + category.id + "/last_24_hours");
        const data = await response.json();
        console.log(data);
        return data;
      }));

      setClicksPer24(responses);
    };

    getClicksPer24();
  }, [categories]);

  useEffect(() => {
    const sortedCategories = categories.sort((a, b) => b.clicksPer24 - a.clicksPer24);
    setSortedCategories(sortedCategories);
  }, [categories, clicksPer24]);


  const images = {
    1: news1,
    2: news2,
    3: news3,
    4: news4,
    5: news5,
  };

  return (
    <div className="news-cards" style={{ paddingTop: "10px" }}>
      {sortedCategories.map((category) => (
          <div className="col-sm-6 col-md-6 col-lg-12" key={category.id}>
            <CategoryCard
              key={category.id}
              category={category}
              image={images[category.id]}
              clicksPer24={clicksPer24[category.id]?.total_clicks}
              onButtonClick={onButtonClick}
              onStoreClick={onStoreClick}
            />
          </div>
      ))}
    </div>
  );

}

export default NewsCards;
