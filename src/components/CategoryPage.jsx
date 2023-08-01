import React from 'react';
import { useParams } from 'react-router-dom';

function CategoryPage() {
  const { category } = useParams(); // Access URL parameters

  return (
    <div>
      <h1>{category}</h1>
      {/* Fetch and display products of this category */}
    </div>
  );
}

export default CategoryPage;