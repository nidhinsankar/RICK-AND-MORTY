import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CHARACTER_API_URL } from "../utils/constant";
import { CharacterResult } from "../types/type";

interface ParameterType {
  pageNumber: number;
  searchValue: string;
  status: string;
  gender: string;
  species: string;
}

export const fetchCharacter = createAsyncThunk<CharacterResult, ParameterType>(
  "fetch/characters",
  async ({ pageNumber, searchValue, status, gender, species }, thunkApi) => {
    try {
      const res = await fetch(
        CHARACTER_API_URL +
          `?page=${pageNumber}&name=${searchValue}&status=${status}&gender=${gender}&species=${species}`
      );
      const data = await res.json();
      return data;
    } catch (error) {
      thunkApi.rejectWithValue("Unable to fetch data");
    }
  }
);

interface InitialStateType {
  loading: boolean;
  characters: CharacterResult;
  error: null | string;
}

const initialState: InitialStateType = {
  loading: false,
  characters: { info: { count: 0, next: "", pages: 0, prev: "" }, results: [] },
  error: null,
};
const characterApiSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCharacter.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCharacter.fulfilled, (state, action) => {
        state.loading = false;
        state.characters = action.payload;
      })
      .addCase(fetchCharacter.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "something went wrong";
      });
  },
});

export default characterApiSlice.reducer;
