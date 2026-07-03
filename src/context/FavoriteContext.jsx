import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {

  const [favorites, setFavorites] = useState(() => {
    const data = localStorage.getItem("favorites");
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (producto) => {

    const existe = favorites.find(item => item.id === producto.id);

    if (existe) {

      setFavorites(favorites.filter(item => item.id !== producto.id));

      toast("Eliminado de favoritos");

    } else {

      setFavorites([...favorites, producto]);

      toast.success("Agregado a favoritos");

    }

  };

  const isFavorite = (id) => {
    return favorites.some(item => item.id === id);
  };

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );

}

export function useFavorite() {
  return useContext(FavoriteContext);
}