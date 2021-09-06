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
      className="flex flex-row py-5 my-2.5 mx-10 border-b-2 border-white"
    >
      <div className="h-36 w-36 ">
        <img src={hero} alt={name} className="rounded-full" />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2>
      </div>
    </Link>
  );
};
