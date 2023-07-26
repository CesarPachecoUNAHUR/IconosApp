import React, { useState } from 'react';
import '../misEstilos/card1.css';

const ImagenGaleria = ({ images, favorites, toggleFavorite }) => {
  const [isHovered, setIsHovered] = useState(null);

  const handleMouseEnter = (imageId) => {
    setIsHovered(imageId);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  return (
    <div className="row row-cols-4">
      {images.map((image) => (
        <div className="col" key={image.id}>
          <div
            className="image-container"
            onMouseEnter={() => handleMouseEnter(image.id)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={image.urls.thumb}
              alt={image.alt_description || "Imagen"}
              className={`img-thumbnail ${isHovered === image.id ? "enlarged" : ""}`}
            />
            <button
              onClick={() => toggleFavorite(image)}
              className={favorites.some(favorite => favorite.id === image.id) ? "btn btn-danger mt-2" : "btn btn-outline-primary mt-2"}
            >
              {favorites.some(favorite => favorite.id === image.id) ? "Quitar favorito" : "Favorito"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImagenGaleria;
