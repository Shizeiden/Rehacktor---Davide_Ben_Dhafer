import { useContext } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import FavoritesContext from "../context/FavoritesContext";



export default function ToggleFavorite({ data }) {
    const { favorites, addFavorites, removeFavorite } = useContext(FavoritesContext);

    if (!data || !data.id) {
        console.error("Errore: 'data' o 'data.id' non esiste.", data);
        return null;
    }

    const isFavorite = (id) => {
        if (!Array.isArray(favorites)) {
            console.error("Errore: 'favorites' non è un array.", favorites);
            return false;
        }
        return favorites.some((fav) => fav && +fav.game_id === +id);
    };

    const handleToggleFavorite = () => {
        if (!Array.isArray(favorites)) {
            console.error("favorites non è un array:", favorites);
            return;
          }
        
          const alreadyFavorite = isFavorite(data.id);
        
          if (alreadyFavorite) {
            const favoriteToRemove = favorites.find(
              (fav) => +fav.game_id === +data.id
            );
            if (favoriteToRemove) {
              removeFavorite(favoriteToRemove);
            }
          } else {
            addFavorites(data);
          }
    };


    return (
        // <div>
        //     <button onClick={handleToggleFavorite}>
        //         <i className="text-white">
        //             {isFavorite(data.id) ? <FaHeart /> : <FaRegHeart />}
        //         </i>

        //     </button>
        // </div>
        <div>
            <button onClick={handleToggleFavorite}>
                {isFavorite(data.id) ? (
                    <FaHeart className="text-white" />
                ) : (
                    <FaRegHeart className="text-white" />
                )}
            </button>

        </div>
    );

}
