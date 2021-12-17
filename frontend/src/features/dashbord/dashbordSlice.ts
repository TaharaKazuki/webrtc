import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IDashbordState {
  username: string | null
}

const initialState: IDashbordState = {
  username: null,
}

export const dashbordSlice = createSlice({
  name: 'dashbord',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IDashbordState>) => {
      state.username = action.payload.username ? action.payload.username : null
    },
  },
})

export const { setUser } = dashbordSlice.actions
export default dashbordSlice.reducer
