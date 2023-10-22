// App.js
import React, { useState, useEffect } from 'react';
import Heading from './Heading';
import HorizontalMenu from './HorizontalMenu';
import CarouselComponent from './Carousel';
import NewsCards from './NewsCards';
import '../css/App.css';
import MostReaded from './MostReaded';
import Footer from './Footer';
function App() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch("http://127.0.0.1:8000/api/categories");
      const data = await response.json();
      console.log(data)
      console.log(response)


      setCategories(data);
    };
    fetchCategories();
  }, []);

  const handleButtonClick = async (categoryId) => {
    // Call the PHP REST endpoint to increment the number of clicks for the category
    await fetch("http://127.0.0.1:8000/api/clicks/" + categoryId, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  const handleStoreClick = async (categoryId) => {
    // Call the PHP REST endpoint to store the details of the click
    await fetch("http://127.0.0.1:8000/api/clicks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category_id: categoryId,
      }),
    });
  };


  return (
    <div className="App">
      <div className="green-background">
        <div className="white-content">
          <Heading />
          <HorizontalMenu />
          <CarouselComponent />
          <NewsCards categories={categories}
            onButtonClick={handleButtonClick}
            onStoreClick={handleStoreClick}
          />
          <MostReaded />
          <Footer  />

        </div>
      </div>
    </div>
  );
}

export default App;
