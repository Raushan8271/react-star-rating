import React, { useState } from 'react';

function StarRating(props) {
  const [limit, setLimit] = useState(props.limit || 5);
  const [rating, setRating] = useState(props.rating || 5);
  const handleRating = (event) => {
    console.log(event.target.getAttribute('data'));
    setRating(event.target.getAttribute('data'));
  };
  return (
    <div>
      <h3>Start Rating</h3>
      {[...new Array(limit).keys()].map((item, i) => {
        return (
          <span key={i} onClick={handleRating} data={i + 1}>
            {i < rating ? '😊' : '😒'}
          </span>
        );
      })}
    </div>
  );
}

export default StarRating;
