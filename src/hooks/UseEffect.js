import React, { useState, useEffect } from 'react';

function UseEffect() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImage = (url) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const img = new Image();
          img.onload = () => resolve(url);
          img.src = url;
        }, 2000); // Ajusta el tiempo de carga aquí
      });
    };

    const loadImages = async () => {
      const imageUrls = [
        'yo.png',
        'yo2.png',
      ];

      const loadedImages = await Promise.all(
        imageUrls.map((url) => loadImage(url))
      );

      setImages(loadedImages);
    };

    loadImages();
  }, []);

  return (
    <div>
      {images.map((url) => (
        <img key={url} src={url} alt="" />
      ))}
    </div>
  );
}

export default UseEffect;
