// Favorito.js
import React from 'react';
import ImagenFavorita from './ImagenFavorita';

const Favorito = ({ images, favorites, toggleFavorite }) => {
  return (
    <>
      <h2>Fotos Favoritas</h2>
      <div className="row row-cols-4">
        {favorites.length > 0 ? (
          favorites.map(favoriteId => {
            const image = images.find(image => image.id === favoriteId);
            return (
              image && (
                <ImagenFavorita
                  key={favoriteId}
                  image={image}
                  toggleFavorite={toggleFavorite}
                />
              )
            );
          })
        ) : (
          <p>No hay fotos marcadas como favoritas.</p>
        )}
      </div>
    </>
  );
};

export default Favorito;
