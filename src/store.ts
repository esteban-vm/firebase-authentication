import { configureStore } from '@reduxjs/toolkit'
import { name, reducer } from '@/features'

const store = configureStore({ reducer: { [name]: reducer } })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
