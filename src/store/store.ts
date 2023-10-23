import { configureStore } from '@reduxjs/toolkit'

// create global storage
export const store = configureStore({
	// All our global states will be under reducers
	reducer: {},
})

// return type RootState on store
export type RootState = ReturnType<typeof store.getState>

// return dispatch type  on store
export type AppDispatch = typeof store.dispatch
