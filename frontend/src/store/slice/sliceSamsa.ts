// src/store/sliceSamsa.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface Samsa {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface SamsaState {
  samsas: Samsa[];
  loading: boolean;
  error: string | null;
}

const initialState: SamsaState = {
  samsas: [],
  loading: false,
  error: null,
};

// 🔹 Fetch all samsas
export const fetchSamsas = createAsyncThunk(
  "samsas/fetchSamsas",
  async () => {
    const res = await axios.get("http://localhost:3000/samsas");
    return res.data;
  }
);

// 🔹 Add new samsa
export const addSamsa = createAsyncThunk(
  "samsas/addSamsa",
  async (samsa: Omit<Samsa, "id">) => {
    const res = await axios.post("http://localhost:3000/samsas", samsa);
    return res.data;
  }
);

// 🔹 Delete samsa
export const deleteSamsa = createAsyncThunk(
  "samsas/deleteSamsa",
  async (id: number) => {
    await axios.delete(`http://localhost:3000/samsas/${id}`);
    return id;
  }
);

// 🔹 Update samsa
export const updateSamsa = createAsyncThunk(
  "samsas/updateSamsa",
  async (samsa: Samsa) => {
    const res = await axios.put(`http://localhost:3000/samsas/${samsa.id}`, samsa);
    return res.data;
  }
);

const samsaSlice = createSlice({
  name: "samsas",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSamsas.pending, (state) => { state.loading = true; state.error = null; })
      .addCase(fetchSamsas.fulfilled, (state, action) => { state.loading = false; state.samsas = action.payload; })
      .addCase(fetchSamsas.rejected, (state, action) => { state.loading = false; state.error = action.error.message || "Error fetching samsas"; })

      .addCase(addSamsa.fulfilled, (state, action) => { state.samsas.push(action.payload); })
      .addCase(deleteSamsa.fulfilled, (state, action) => { state.samsas = state.samsas.filter(s => s.id !== action.payload); })
      .addCase(updateSamsa.fulfilled, (state, action) => {
        const index = state.samsas.findIndex(s => s.id === action.payload.id);
        if (index !== -1) state.samsas[index] = action.payload;
      });
  },
});

export default samsaSlice.reducer;
