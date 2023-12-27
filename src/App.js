import React from 'react';
import './style.css';
import StarRating from './component/StarRating';

export default function App() {
  return (
    <div>
      <StarRating limit={5} rating={2} />
    </div>
  );
}
