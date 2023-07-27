import React, { useState, useEffect } from 'react';
import ImagenGaleria from './ImagenGaleria';
import '../misEstilos/card1.css'

const endPoind = "https://api.unsplash.com/search/photos";
const clientId = "ADuaX1kAFrPdhQOanx5y3mZIRQA8hzVeIZRytvFJ4Ws";

const Card = () => {
  const [query, setQuery] = useState('');
  const [searchImages, setSearchImages] = useState([]);

  // Estado para mantener las imágenes favoritas debajo de las imágenes buscadas
  const [favoriteImages, setFavoriteImages] = useState([]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favoriteImages));
  }, [favoriteImages]);
  
  // Estado para mantener el número de página actual
  const [page, setPage] = useState(1);
  // Número de imágenes por página
  const imagesPerPage = 20;
  // Estado para la cantidad de fotos múltiplo de 10
  const [multipleOfTen, setMultipleOfTen] = useState(10);

  useEffect(() => {
    // Si hay búsqueda o categoría seleccionada
    if (query) {
      // Construir la URL de la API con la búsqueda y la categoría seleccionada
      let url = `${endPoind}?client_id=${clientId}&page=${page}&per_page=${imagesPerPage}`;
      if (query) {
        url += `&query=${query}`;
      }
      // Realizar la llamada a la API
      fetch(url)
        .then(response => response.json())
        .then(jsonResponse => {
          console.log(jsonResponse);
          const newImages = jsonResponse.results;
          setSearchImages(newImages);
        });
    } else {
      // Si no hay búsqueda, restablecer las imágenes de búsqueda
      setSearchImages([]);
    }
  }, [query, page]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Al enviar el formulario, reseteamos el número de página a 1
    setPage(1);
  };

  const transkQuerryValue = (ev) => {
    setQuery(ev.target.value);
    // Al cambiar el texto de búsqueda, reseteamos el número de página a 1
    setPage(1);
  };

  const handleMultipleOfTenFilter = (value) => {
    setMultipleOfTen(parseInt(value)); // Convertir el valor a un número entero
  };

  // Restablecer las imágenes cuando se borra el texto de búsqueda o cambia la cantidad de fotos múltiplo de 10
  const clearSearch = () => {
    setSearchImages([]);
    setQuery('');
    setMultipleOfTen(10);
  };
 
  const toggleFavorite = (id) => {
    const isFavorite = favoriteImages.some(image => image.id === id);
    if (isFavorite) {
      const updatedFavorites = favoriteImages.filter(image => image.id !== id);
      setFavoriteImages(updatedFavorites);
    } else {
      // Buscar la imagen en las imágenes buscadas y agregarla a las favoritas
      const selectedImage = searchImages.find(image => image.id === id);
      if (selectedImage) {
        setFavoriteImages([...favoriteImages, selectedImage]);
      }
    }
  };

  return (
    <>
      <div className='container'>
        <div className='row-wrapper'>
          <div className='col-12'>
            <form className="search-form" onSubmit={handleSubmit}>
              <div className="search-container">
                <label htmlFor="query">Buscar imagen:</label>
                <input type="text" id="query" value={query} onChange={transkQuerryValue} />
              </div>
              <div className="image-counter-container">
                <label htmlFor="imageCounter">Cantidad de imágenes:</label>
                <input type="number" id="imageCounter" value={multipleOfTen} onChange={(e) => handleMultipleOfTenFilter(e.target.value)} />
              </div>
              <button className="search-button" onClick={clearSearch}>Borrar búsqueda</button>
            </form>

          </div>
          
          <div className='card-columns mt-4'>
            {searchImages.length > 0 ?
              <ImagenGaleria 
                images={searchImages.slice(0, multipleOfTen)} 
                favorites={""} 
                toggleFavorite={toggleFavorite} />
              :
              <p>No se encontraron imágenes.</p>
            }
          </div>
          {/* Agregar una nueva sección para mostrar las imágenes favoritas */}
        <div className='row-wrapper'>
          <h2>Imágenes Favoritas</h2>
          <div className='card-columns mt-4'>
            {favoriteImages.length > 0 ? (
              <ImagenGaleria
                images={favoriteImages}
                favorites={favoriteImages.map(image => image.id)}
                toggleFavorite={toggleFavorite}
              />
            ) : (
              <p>No tienes imágenes favoritas seleccionadas.</p>
            )}
          </div>
        </div>

          
        </div>
      </div>
    </>
  );
};

export default Card;
