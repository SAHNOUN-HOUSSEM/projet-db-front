import { axiosPrivate } from "../../API/axios";
import FavouriteButton from "../../UI/FavouriteButton";
import useAuth from "../../hooks/useAuth";

export default function PlatCard({ plat, isFavoris, onFavouriteButtonClick }) {
  const { auth } = useAuth();
  const clientId = auth.clientId;

  const handleFavouriteButtonClick = async () => {
    try {
      if (isFavoris) {
        // Remove from favoris
        const response = await axiosPrivate.delete(`/favoris/${clientId}`, {
          data: { platID: plat[0] },
        });
        onFavouriteButtonClick((myFavoris) =>
          myFavoris.filter((f) => f !== plat[0])
        );
      } else {
        // Add to favoris
        const response = await axiosPrivate.post(`/favoris/${clientId}`, {
          platID: plat[0],
        });
        onFavouriteButtonClick((myFavoris) => [...myFavoris, plat[0]]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">nom du plat: {plat[1]}</h5>
        <p className="card-text">nbre de personne: {plat[2]}</p>
        <p className="card-text">prix: {plat[3]}</p>
        <p className="card-text">description: {plat[4]}</p>
        <p>
          <div className="row align-items-end">
            <div className="col">
              <FavouriteButton
                isFilled={isFavoris}
                handleFavouriteButtonClick={handleFavouriteButtonClick}
              />
            </div>
          </div>
        </p>
      </div>
    </div>
  );
}
