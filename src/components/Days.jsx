import React, { useState } from 'react';
import './dayssty.css'

function Days() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const items = [["monday", "cloud"], ["tuesday", "Rain"], ["wedensday", "Sunny"],];
  const items1 = [["thursday", "cloud"], ["friday", "Rain"], ["saturday", "Sunny"], ["sunday", "rain"]];

  return (
    <div className="dayscon">
      <h1>Fort</h1>

      {items.map((item, index) => (
        <div className='details'>
          <h3>{item[0]}</h3>
          <h2>{item[1]}</h2>
        </div>
      ))}

      {showMore ? (
        <div>
          {items1.map((item, index) => (
            <div className='details'>
              <h3>{item[0]}</h3>
              <h2>{item[1]}</h2>
            </div>
          ))}
        </div>
      ) : null}
      <button className='button1' onClick={toggleShowMore}>
        {showMore ? 'Show less' : 'show more'}
      </button>
    </div>
  );
}

export default Days;
