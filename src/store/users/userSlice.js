import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  isLoading: true,
  error: undefined,
};

const fetchUser = createAsyncThunk('users/fetchUsers', async () => {
  try {
    const requestUser = await fetch('https://randomuser.me/api/?results=5');
    const res = await requestUser.json();
    return res.results
  } catch (error) {
    
  }
})

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: () => console.log('add user')
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.isLoading = true;
    }).addCase(fetchUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
      state.error = "";
    }).addCase(fetchUser.rejected, (state, action) => {
      state.isLoading = false;
      state.users = [];
      state.error = action.error.message;
    })
  },
});

export const { addUser } = userSlice.actions;
export { fetchUser }
export default userSlice.reducer;
