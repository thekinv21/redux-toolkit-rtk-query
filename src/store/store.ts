import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as recipeReducer } from './favorites/favorites'

//* eğer projenizde 3 4 tane farklı reducerlar var ise
//* combineReducers metodunu kullanabilirsiniz

const allReducers = combineReducers([recipeReducer])

// create global storage
export const store = configureStore({
	// All our global states will be under reducers
	reducer: {
		// 5.step
		recipe: allReducers
	}
})

// return type RootState on store
export type RootState = ReturnType<typeof store.getState>

// return dispatch type  on store
export type AppDispatch = typeof store.dispatch
