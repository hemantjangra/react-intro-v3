import React from "react";

import { Pet } from "./Pet";

export const Results = ({ pets }) => {
  return (
    <div className="grid gap-4 lg:grid-cols-2 sm:grid-cols-1 mr-20">
      {!pets.length ? (
        <h1>Pets not found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            animal={pet.animal}
            key={pet.id}
            name={pet.name}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            id={pet.id}
          />
        ))
      )}
    </div>
  );
};
