import type { User } from '@/models'
import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export interface AuthState {
  user: User | null
}

const initialState: AuthState = {
  user: null,
}

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<User>) {
      state.user = action.payload
    },
    logout(state) {
      state.user = null
    },
  },
})

export const {
  name,
  reducer,
  actions: { login, logout },
} = slice
