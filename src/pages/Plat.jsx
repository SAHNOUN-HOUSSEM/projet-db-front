import React, { useEffect, useState } from "react";
import axios from "../API/axios";
import PlatCard from "../components/Plats/PlatCard";
import useAuth from "../hooks/useAuth";

function Plat() {
  const { auth } = useAuth();
  const clientId = auth.clientId;

  const [plats, setPlats] = useState([]);
  const [myFavoris, setMyFavorites] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPlats = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("/plats");
        const data = response.data;
        setPlats(data);
        const response2 = await axios.get(`/favoris/${clientId}`);
        const data2 = response2.data;
        setMyFavorites(data2.map((row) => row[0]));
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPlats();
  }, []);

  return (
    <div className="container">
      <p>Plats</p>
      {isLoading ? (
        // add a spinner
        <div className="spinner-border" role="status"></div>
      ) : (
        <div className="row">
          {plats.map((plat) => {
            const isFavoris = myFavoris.includes(plat[0]);
            return (
              <div className="col-4 mb-5">
                <PlatCard
                  key={plat[0]}
                  plat={plat}
                  isFavoris={isFavoris}
                  onFavouriteButtonClick={setMyFavorites}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Plat;
