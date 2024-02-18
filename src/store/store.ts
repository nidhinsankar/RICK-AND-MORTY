import { configureStore } from "@reduxjs/toolkit";
import characterAPISlice from "./characterAPISlice";
import { useDispatch } from "react-redux";
import singleCharacterApiSlice from "./singleCharacterApiSlice";
import episodeApiSLice from "./episodeApiSLice";
import locationApiSlice from "./locationApiSlice";

export const store = configureStore({
  reducer: {
    character: characterAPISlice,
    singleCharacter: singleCharacterApiSlice,
    episode: episodeApiSLice,
    location: locationApiSlice,
  },
});

export const useAppDispatch = () => useDispatch();
export default store;
