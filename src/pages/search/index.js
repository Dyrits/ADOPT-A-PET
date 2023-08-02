import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { getPets } from "../../api/petfinder";

import Hero from "../../components/hero";
import Pet from "../../components/pet";

const SearchPage = () => {
  const [searchParams] = useSearchParams();

  const petNameToFind = searchParams.get("name") || "";

  const [pets, setPets] = useState([]);

  useEffect(() => {
    getPets("", petNameToFind).then((petsData) => {
      setPets(petsData);
    });
  }, [petNameToFind]);

  return (
    <div className="page">
      <Hero displayText={`Results for ${petNameToFind}`} />

      <h3>Pets available for adoption near you</h3>

      <main>
        <div className="grid">
          {pets.map((pet) => (
            <Pet animal={pet} key={pet.id} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default SearchPage;
