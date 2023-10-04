import React, { useEffect, useState } from 'react';
import CardComponent from '../Component/Cards/Cards';

function Favorite() {
  const [favoriteData, setFavoriteData] = useState([]);

  useEffect(() => {
    
    const getDataFromLocal = JSON.parse(localStorage.getItem('favorite'));
    
    if (getDataFromLocal) {
      setFavoriteData(getDataFromLocal);
    }
  }, []);

  return (
    <div>
      <h2>Favorite Items</h2>
        {
          favoriteData.map((item, index) => {
            return (
                <CardComponent
                  key={index}
                  image={item.image}
                  title={item.name}
                  description={item.description}
                />
        )})
            }

    </div>
  );
}

export default Favorite;
