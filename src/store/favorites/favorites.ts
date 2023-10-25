//* 1.Step: import createSlice from "@reduxjs/toolkit"

//* 2.Step: create initial states if you use ts give Type for states

//* 3.Step: create slice

//* 4.Step : export actions and reduccer from slice

//* 5.Step: add slice reducer to store

// 1.step
import { TypeRecipe } from '@/types/recipe.types'
import { createSlice } from '@reduxjs/toolkit'

// 2.step

const initialState: TypeRecipe[] = []

export const favoritesSlice = createSlice({
	// name must be unique

	name: 'favorites',

	// 2.step our state
	initialState,

	// our functions for add,delete,update
	reducers: {
		// action payload:it's all what we write into the function

		toggleFavorites: (state, { payload: recipe }) => {
			// if recipe is exist on state
			const isExist = state.some(r => r.id === recipe.id)

			// delete this recipe
			if (isExist) {
				state = state.filter(r => r.id !== recipe.id)
			}
			// add this recipe
			else {
				state.push(recipe)
			}
		}
	}
})

// 4.step

export const { actions, reducer } = favoritesSlice
