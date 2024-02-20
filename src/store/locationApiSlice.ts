import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LOCATION_API_URL } from "../utils/constant";
import { Character } from "../types/type";

interface LocationInfo {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

interface LocationResult {
  AllCharacter: Character[];
  info: LocationInfo;
}

export const fetchLocation = createAsyncThunk<
  LocationResult,
  { locationNumber: number }
>("fetch/location", async ({ locationNumber }, thunkAPI) => {
  try {
    const res = await fetch(LOCATION_API_URL + locationNumber);
    const data = await res.json();
    let list = await Promise.all(
      data?.residents?.map((x: string) => fetch(x).then((res) => res.json()))
    );
    return { AllCharacter: list, info: data };
  } catch (error) {
    return thunkAPI.rejectWithValue("unable to fetch data");
  }
});

interface InitialStateType {
  loading: boolean;
  location: object;
  error: string | null;
}

const initialState: InitialStateType = {
  loading: false,
  location: {},
  error: null,
};

const locationApiSlice = createSlice({
  name: "location",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchLocation.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLocation.fulfilled, (state, action) => {
        state.loading = false;
        state.location = action.payload;
      })
      .addCase(fetchLocation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Rejected to fetch data";
      });
  },
});

export default locationApiSlice.reducer;
