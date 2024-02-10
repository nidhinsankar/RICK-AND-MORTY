import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { EPISODE_API_URL } from "../utils/constant";

export const fetchEpisode = createAsyncThunk(
  "fetch/episode",
  async ({ episodeNumber }, thunkAPI) => {
    try {
      const res = await fetch(EPISODE_API_URL + episodeNumber);
      const data = await res.json();
      let list = await Promise.all(
        data?.characters?.map((x) => fetch(x).then((res) => res.json()))
      );
      return { AllCharacter: list, info: data };
    } catch (error) {
      thunkAPI.rejectWithValue("unable to fetch data");
    }
  }
);

const episodeApiSLice = createSlice({
  name: "episode",
  initialState: {
    loading: false,
    episodes: {},
    error: null,
  },
  extraReducers(builder) {
    builder
      .addCase(fetchEpisode.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEpisode.fulfilled, (state, action) => {
        state.loading = false;
        state.episodes = action.payload;
      })
      .addCase(fetchEpisode.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "problem with fetch data";
      });
  },
});

export default episodeApiSLice.reducer;
