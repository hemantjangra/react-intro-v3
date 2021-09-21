import React, { useContext, useEffect, useState, Fragment } from "react";

import { useBreedList } from "./useBreedList";

import { Header } from "./Header";
import { Pet } from "./Pet";
import { Results } from "./Results";

import { ThemeContext } from "./ThemeContext";

const SearchParam = () => {
  //const location = "London, United Kingdom";
  const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

  //const locationRef = createRef();
  const [location, setLocation] = useState("");

  const [animal, updateAnimals] = useState("");

  const [breed, updateBreed] = useState("");

  const [pets, setPets] = useState([]);

  const [breedList] = useBreedList(animal || ANIMALS[0]);

  useEffect(() => fetchPets(), []);

  const [theme, setTheme] = useContext(ThemeContext);

  // const fetchPets = () =>{
  //   fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`).then(res=> res.json()).then(jsonResult => setPets(jsonResult.pets));
  // }
  const fetchPets = async () => {
    let requestedAnimal = animal || ANIMALS[0];
    var results = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${requestedAnimal}&location=${location}&breed=${breed}`
    );
    var jsonPets = await results.json();
    setPets(jsonPets.pets);
  };

  return (
    <Fragment>
      <Header />
      <div className="flex flex-row">
        <form
          className="bg-red-400 p-10 flex flex-col items-center justify-center divide-y divide-white-900 w-4/12 h-full mx-20"
          onSubmit={(e) => {
            e.preventDefault();
            fetchPets();
          }}
        >
          <label htmlFor="location" className="w-full block my-2.5">
            Location
            {/*<input id="location" placeholder='Locations' defaultValue='London' ref={locationRef} />*/}
            <input
              className="block w-full h-8"
              id="location"
              placeholder="Locations"
              onChange={(e) => setLocation(e.target.value)}
              value={location}
            />
          </label>
          <label htmlFor="animals" className="w-full my-2.5">
            <select
              className="full-width"
              id="animal"
              onChange={(e) => updateAnimals(e.target.value)}
              onBlur={(e) => updateAnimals(e.target.value)}
            >
              {ANIMALS.map((optionAnimal) => (
                <option
                  key={optionAnimal}
                  id={optionAnimal}
                  value={optionAnimal}
                >
                  {optionAnimal}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="breed" className="w-full my-2.5">
            <select
              className="w-full"
              id="breed"
              disabled={!breedList.length}
              onChange={(e) => updateBreed(e.target.value)}
              onBlur={(e) => updateBreed(e.target.value)}
            >
              {breedList.map((optionBreed) => (
                <option key={optionBreed} value={optionBreed}>
                  {optionBreed}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="theme" className="w-full my-2.5">
            <select
              className="w-full"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              onBlur={(e) => setTheme(e.target.value)}
            >
              <option value="peru">Peru</option>
              <option value="darkblue">Dark Blue</option>
              <option value="chartreuse">Chartreuse</option>
              <option value="mediumorchid">Medium Orchid</option>
            </select>
          </label>
          <button
            id="submitButton"
            className="w-1/3 h-12 text-3xl text-white rounded"
            style={{ backgroundColor: theme }}
          >
            Submit
          </button>
        </form>
        <Results pets={pets} />
      </div>
    </Fragment>
  );
};

export default SearchParam;
