import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CHARACTER_API_URL } from "../utils/constant";

export const fetchSingleCharacter = createAsyncThunk(
  "fetch/singleCharacter",
  async ({ id }, thunkAPI) => {
    try {
      const res = await fetch(CHARACTER_API_URL + id);
      const data = await res.json();
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue("unable to fetch data");
    }
  }
);

const singleCharacterApiSlice = createSlice({
  name: "singleCharacterAPI",
  initialState: {
    loading: false,
    singleCharacter: {},
    error: null,
  },
  extraReducers(builder) {
    builder
      .addCase(fetchSingleCharacter.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSingleCharacter.fulfilled, (state, action) => {
        state.loading = false;
        state.singleCharacter = action.payload;
      })
      .addCase(fetchSingleCharacter.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "problem with data fetching";
      });
  },
});

export default singleCharacterApiSlice.reducer;
