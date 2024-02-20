import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { EPISODE_API_URL } from "../utils/constant";
import { Character } from "../types/type";

interface EpisodeInfo {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

interface EpisodeResult {
  AllCharacter: Character[];
  info: EpisodeInfo;
}

export const fetchEpisode = createAsyncThunk<
  EpisodeResult,
  { episodeNumber: number }
>("fetch/episode", async ({ episodeNumber }, thunkAPI) => {
  try {
    const res = await fetch(EPISODE_API_URL + episodeNumber);
    const data = await res.json();
    let list = await Promise.all(
      data?.characters?.map((x: string) => fetch(x).then((res) => res.json()))
    );
    return { AllCharacter: list, info: data };
  } catch (error) {
    return thunkAPI.rejectWithValue("unable to fetch data");
  }
});

interface InitialStateType {
  loading: boolean;
  episodes: object;
  error: string | null;
}

const initialState: InitialStateType = {
  loading: false,
  episodes: {},
  error: null,
};

const episodeApiSLice = createSlice({
  name: "episode",
  initialState,
  reducers: {},
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
        state.error = action.error.message || "problem with fetch data";
      });
  },
});

export default episodeApiSLice.reducer;
