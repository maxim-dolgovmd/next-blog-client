import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  created: false,
  addPost: []
}

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setCreated: (state, action) => {
      state.created = action.payload
    },

    setAddPost: (state, action) => {
      state.addPost = action.payload
    },

    setRemovePost: (state, action) => {
      state.addPost.filter((obj) => obj._id !== action.payload)
    }
  },
})

export const { setCreated, setAddPost, setRemovePost } = postSlice.actions

export const AddCreated = (state) => state.post

export default postSlice.reducer

