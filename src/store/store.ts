import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as favoriteReducer } from './favorites/favorites'

//* If there are 3 or 4 different reducers in your project use combineReducers function

const allReducers = combineReducers({
	favorites: favoriteReducer
})

// create global storage
export const store = configureStore({
	// All our global states will be under reducers
	reducer: {
		// 5.step
		reducers: allReducers
	}
})

// return type RootState on store
export type RootState = ReturnType<typeof store.getState>

// return dispatch type  on store
export type AppDispatch = typeof store.dispatch
