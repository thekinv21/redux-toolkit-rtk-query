//? The reason we created useActions is to access all actions from one place and not import dispatch everywhere.

//* 1.Step import useDispatch fonks from react-redux

//* 2.Step: create useActions custom hook

//* 3.Step: return with useMemo and optimize re-renders

//* 4.Step: Create a rootActions file in the store folder and import all actions there.

//* 5.Step: Call the bindActionCreator function and add rootAction as a parameter and give all the actions and dispatch.

import { rootActions } from '@/store/actions'
import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'

export const useActions = () => {
	const dispatch = useDispatch()

	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
