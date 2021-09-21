import React, { Component, useState } from "react";

const Carousel = ({ images }) => {
  const [active, setActive] = useState(0);

  images = images || ["http://pets-images.dev-apis.com/pets/none.jpg"];

  function handleImageClick(e) {
    setActive(+e.target.dataset.index);
  }

  return (
    <div className="flex flex-row justify-around h-72 mx-52">
      <img src={images[active]} alt="animal" />
      <div className="w-36 h-36 m-auto flex flex-row justify-around">
        {images.map((photo, index) => (
          // eslint-disable-next-line
          <img
            key={photo}
            src={photo}
            className={
              index === active ? "active rounded-full" : "rounded-full"
            }
            alt="animal thumbnail"
            onClick={(e) => this.handleImageClick(e)}
            data-index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
