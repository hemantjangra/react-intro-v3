import React from "react";
import { Link } from "react-router-dom";

// export const Pet = ({ name, animal, breed }) => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", { key: "Name" }, name),
//     React.createElement("h2", { key: "Animal" }, animal),
//     React.createElement("h3", { key: "breed" }, breed),
//   ]);
// };

export const Pet = ({ name, animal, breed, images, location, id }) => {
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }
  return (
    <Link
      to={`/css/details/${id}`}
      className="bg-red-400 relative block mx-10 p-5"
    >
      <div className="h-full w-full m-auto">
        <img src={hero} alt={name} className="rounded-full" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-tr from-white to-transparent pr-2 pt-2">
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2>
      </div>
    </Link>
  );
};
