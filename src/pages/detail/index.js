import React, { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";

import { getPetDetails } from "../../api/petfinder";
import Hero from "../../components/hero";

const PetDetailsPage = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    getPetDetails(id).then(petsData => {
      setData(petsData);
      setError(false);
    }).catch(error => {
      setError(true);
    }).finally(() => {
      setLoading(false);
    });
  }, [id]);

  return (
    <div>
      {loading ? (
        <h3>Loading...</h3>
      ) : error ? (
        <div>
          <Navigate to="/not-found" />
        </div>
      ) : (
        <main>
          <Hero
            image={data.photos[1]?.full || "https://i.imgur.com/aEcJUFK.png"}
            displayText={`Meet ${data.name}`}
          />
          <div className="pet-detail">
            <div className="pet-image-container">
              <img
                className="pet-image"
                src={
                  data.photos[0]?.medium || "https://i.imgur.com/aEcJUFK.png"
                }
                alt=""
              />
            </div>
            <div>
              <h1>{data.name}</h1>
              <h3>Breed: {data.breeds.primary}</h3>
              <p>Color: {data.colors.primary || "Unknown"}</p>
              <p>Gender: {data.gender}</p>
              <h3>Description</h3>
              <p>{data.description}</p>
            </div>
          </div>
        </main>
      )}
    </div>
  );
};

export default PetDetailsPage;
