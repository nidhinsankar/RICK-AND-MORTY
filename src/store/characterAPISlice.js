import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CHARACTER_API_URL } from "../utils/constant";

export const fetchCharacter = createAsyncThunk(
  "fetch/characters",
  async (_, thunkApi) => {
    try {
      const res = await fetch(CHARACTER_API_URL);
      const data = await res.json();
      return data;
    } catch (error) {
      thunkApi.rejectWithValue("Unable to fetch data");
    }
  }
);

const characterApiSlice = createSlice({
  name: "characters",
  initialState: {
    loading: false,
    characters: [],
    error: null,
  },
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
