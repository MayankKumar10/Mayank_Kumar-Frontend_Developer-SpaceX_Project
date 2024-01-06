// src/features/spacexSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  rocket:[],
  status: 'idle',
  error: null,
};

const fetchAllRocketData = createAsyncThunk('spacex/fetchAllRocketData', async()=>{
        const response = await axios.get("https://api.spacexdata.com/v3/rockets")
        return response?.data
})

const fetchOneRocket = createAsyncThunk('spacex/fetchOneRocket', async(slug)=>{
    const response = await axios.get(`https://api.spacexdata.com/v3/rockets/${slug}`)
    console.log("response", response?.data)
    return response?.data
})

const spacexSlice = createSlice({
  name: 'spacex',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builders) =>{
    builders  
    .addCase(fetchAllRocketData.pending, (state)=>{
      state.status = 'loading'
    })
    .addCase(fetchAllRocketData.fulfilled, (state, action)=>{
      state.status = 'succeeded';
      state.data = action.payload
    })
    .addCase(fetchAllRocketData.rejected, (state, action)=>{
      state.status = 'failed'
      state.error = action.error.message
    })
    .addCase(fetchOneRocket.fulfilled, (state, action)=>{
      state.rocket = action.payload
    })
  }
});

export const { setData } = spacexSlice.actions;
export const spaceReducer = spacexSlice.reducer;
export {fetchAllRocketData, fetchOneRocket}

