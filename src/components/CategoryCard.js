import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/card.css';

function CategoryCard({ category, image, onButtonClick, onStoreClick }) {
  return (
    <div className="card col-12 col-sm-6 col-md-6 col-lg-4">
      <div className="card-body">
        <img src={image} className="card-img-top image" alt={category.name} />
        <h3 className="category_name">{category.name}</h3>
        <button className='btn btn-success rounded-circle category_name'  onClick={() => { onButtonClick(category.id); onStoreClick(category.id); }}>المزيد</button>
      </div>
    </div>
  );
}

export default CategoryCard;
