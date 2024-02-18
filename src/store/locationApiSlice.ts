import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LOCATION_API_URL } from "../utils/constant";

export const fetchLocation = createAsyncThunk(
  "fetch/location",
  async ({ locationNumber }, thunkAPI) => {
    try {
      const res = await fetch(LOCATION_API_URL + locationNumber);
      const data = await res.json();
      let list = await Promise.all(
        data?.residents?.map((x) => fetch(x).then((res) => res.json()))
      );
      return { AllCharacter: list, info: data };
    } catch (error) {
      thunkAPI.rejectWithValue("unable to fetch data");
    }
  }
);

const locationApiSlice = createSlice({
  name: "location",
  initialState: {
    loading: false,
    location: {},
    error: null,
  },
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
        state.error = action.payload || "Rejected to fetch data";
      });
  },
});

export default locationApiSlice.reducer;
