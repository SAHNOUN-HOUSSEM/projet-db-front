import { useEffect, useState } from "react";
import { axiosPrivate } from "../API/axios";
import useAuth from "../hooks/useAuth";
import FavorisRow from "../components/Favoris/FavorisRow";

export default function Favoris() {
  const { auth } = useAuth();
  const clientId = auth.clientId;

  const [favoris, setFavoris] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchFavoris = async () => {
      setIsLoading(true);
      try {
        const response = await axiosPrivate.get(`/favoris/${clientId}`);
        setFavoris(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchFavoris();
  }, []);

  const handleReloveFavoris = async (favorisId) => {
    try {
      const response = await axiosPrivate.delete(`/favoris/${clientId}`, {
        data: { platID: favorisId },
      });
      setFavoris((favoris) =>
        favoris.filter((favoris) => favoris[0] !== favorisId)
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1>Page Favoris</h1>
      {isLoading ? (
        <div
          className="ms-auto spinner-border text-primary"
          role="status"
        ></div>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Nom du plat</th>
              <th>nombre de personne</th>
              <th>prix</th>
              <th>description</th>
              <th>enlever</th>
            </tr>
          </thead>
          <tbody>
            {favoris.map((favoris) => (
              <FavorisRow
                key={favoris[0]}
                favoris={favoris}
                onRemoveFavoris={handleReloveFavoris}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
