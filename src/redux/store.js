import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "./recepiesSlice";
import favoritesReducer from "./favoritesSlice";

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    favorites: favoritesReducer,
  },
});

export default store;
