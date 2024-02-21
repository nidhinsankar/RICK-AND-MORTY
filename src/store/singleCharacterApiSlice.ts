import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CHARACTER_API_URL } from "../utils/constant";
import { Character } from "../types/type";

export const fetchSingleCharacter = createAsyncThunk<
  Character,
  { id: string | undefined }
>("fetch/singleCharacter", async ({ id }, thunkAPI) => {
  try {
    const res = await fetch(CHARACTER_API_URL + id);
    const data = await res.json();
    return data;
  } catch (error) {
    thunkAPI.rejectWithValue("unable to fetch data");
  }
});

interface StateType {
  loading: boolean;
  singleCharacter: Character;
  error: null | string;
}

const initialState: StateType = {
  loading: false,
  singleCharacter: {
    created: "",
    episode: [],
    gender: "",
    id: 0,
    image: "",
    location: { name: "", url: "" },
    name: "",
    origin: { name: "", url: "" },
    species: "",
    status: "",
    type: "",
    url: "",
  },
  error: null,
};

const singleCharacterApiSlice = createSlice({
  name: "singleCharacterAPI",
  initialState: initialState,
  reducers: {},
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
        state.error = action.error.message || "problem with data fetching";
      });
  },
});

export default singleCharacterApiSlice.reducer;
