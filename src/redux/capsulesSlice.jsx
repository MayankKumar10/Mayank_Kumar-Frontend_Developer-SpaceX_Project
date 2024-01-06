// src/features/spacexSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  capsule:[],
  status: 'idle',
  error: null,
};

const fetchAllCapsulesData = createAsyncThunk('capsules/fetchAllCapsulesData', async()=>{
        const response = await axios.get("https://api.spacexdata.com/v3/capsules")
        return response?.data
})

const fetchOneCapsule = createAsyncThunk('capsules/fetchOneRocket', async(slug)=>{
    const response = await axios.get(`https://api.spacexdata.com/v3/capsules/${slug}`)
    console.log("response", response.data)
    return response?.data
})

const capsulesSlice = createSlice({
  name: 'capsules',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builders) =>{
    builders  
    .addCase(fetchAllCapsulesData.pending, (state)=>{
      state.status = 'loading'
    })
    .addCase(fetchAllCapsulesData.fulfilled, (state, action)=>{
      state.status = 'succeeded';
      state.data = action.payload
    })
    .addCase(fetchAllCapsulesData.rejected, (state, action)=>{
      state.status = 'failed'
      state.error = action.error.message
    })
    .addCase(fetchOneCapsule.fulfilled, (state, action)=>{
      state.capsule = action.payload
    })
  }
});

export const { setData } = capsulesSlice.actions;
export const capsulesReducer = capsulesSlice.reducer;
export {fetchAllCapsulesData, fetchOneCapsule}

