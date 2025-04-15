import { useState, useEffect, useCallback, useContext } from "react";
import FavoritesContext from "./FavoritesContext";
import SessionContext from "./SessionContext";
import supabase from "../supabase/supabase-client";

export default function FavoritesProvider({ children }) {
    const { session } = useContext(SessionContext);
    const [favorites, setFavorites] = useState([]);

    const getFavorites = useCallback(async () => {
        if (!session?.user?.id) return;

        let { data: favourites, error } = await supabase
            .from("favorites")
            .select("*")
            .eq("user_id", session?.user.id);

        if (error) {
            console.log(error);
            console.log("Errore in console");
        } else {
            setFavorites(favourites || []);
        }
    }, [session]);

    const addFavorites = async (game) => {
        if (!session?.user?.id) return;

        await supabase
            .from("favorites")
            .insert([
                {
                    user_id: session?.user.id,
                    game_id: game.id,
                    game_name: game.name,
                    game_image: game.background_image,
                },
            ])
            .select();

            if (error) {
                console.log("Errore durante l'aggiunta dei preferiti:", error);
            } else {
                getFavorites();
            }

        };
        

    const removeFavorite = async (game) => {
        if (!session?.user?.id) return;

        const { error } = await supabase
            .from("favorites")
            .delete()
            .eq("game_id", game.game_id)
            .eq("user_id", session?.user.id);

            if (error) {
                console.log("Errore durante la rimozione dei preferiti:", error);
            } else {
                getFavorites();
            }
    };

    useEffect(() => {
        if (session) {
            getFavorites();
        }
        
        const favorites = supabase
            .channel("favorites")
            .on(
                "postgres_changes",
                { event: "*", schema: "public", table: "favorites" },
                () => getFavorites()
            )
            .subscribe();

        return () => {
            if (favorites) {
                supabase.removeChannel(favorites);
            }
            favorites.unsubscribe();
        };
    }, [getFavorites, session]);

    return (
        <FavoritesContext.Provider
            value={{
                favorites,
                setFavorites,
                addFavorites,
                removeFavorite,
            }}
        >
            {children}
        </FavoritesContext.Provider>
    );
}
