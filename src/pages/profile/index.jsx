import { useContext } from "react";
import SessionContext from "../../context/SessionContext";
import FavoritesContext from "../../context/FavoritesContext";
import { FaTrashAlt } from "react-icons/fa";

const favoriteGameUI = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
};

export default function ProfilePage() {
    const { session } = useContext(SessionContext);
    const { favorites, removeFavorite } = useContext(FavoritesContext);

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 text-white">
            <h2 className="text-3xl font-bold mb-6">
                Hey {session?.user.user_metadata.first_name}👋 
            </h2>

            <div className="bg-gray-800 rounded-xl p-6 shadow-lg mt-4">
                <h3 className="text-2xl font-semibold mb-4">Ecco i tuoi giochi preferiti:</h3>

                {favorites.length === 0 ? (
                    <p className="text-gray-400">Non ci sono preferiti al momento...</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {favorites.map((game) => (
                            <div
                                key={game.id}
                                className="bg-gray-900 rounded-lg overflow-hidden shadow-md relative hover:shadow-xl transition"
                            >
                                <img
                                    src={game.game_image}
                                    alt={game.game_name}
                                    className="w-full h-40 object-cover"
                                />
                                <div className="p-4 flex justify-between items-center">
                                    <p className="font-semibold">{game.game_name}</p>
                                    <button
                                        onClick={() => removeFavorite(game)}
                                        className="text-red-400 hover:text-red-600 transition"
                                        title="Rimuovi dai preferiti"
                                    >
                                        <FaTrashAlt />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}