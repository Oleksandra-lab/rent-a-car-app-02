import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestAllCars } from "../../services/api";

export const fetchCars = createAsyncThunk(
    'cars',
    async (_, thunkAPI) => {
      try {     
        const cars = await requestAllCars();
        console.log(cars);
        return cars;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );