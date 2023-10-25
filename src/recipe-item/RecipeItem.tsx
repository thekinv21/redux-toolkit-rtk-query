import { RootState } from '@/store/store'
import { TypeRecipe } from '@/types/recipe.types'
import { FC } from 'react'
import { useSelector } from 'react-redux'

const RecipeItem: FC<TypeRecipe> = ({ name, description }) => {
	// * useSelector nedir?

	//? userSelector yardımıyla global state'den statelerimizi alabiliriz

	//* Örnek

	const favorites = useSelector((state: RootState) => state.recipe)

	console.log('favorites', favorites)

	return (
		<div className='flex justify-between px-4 items-center gap-x-3 bg-[#3d3d3d] w-full py-4 rounded-md'>
			<div className='flex flex-col'>
				<h2 className='text-lg text-white w-[100px]'>{name}</h2>
				<p className='text-sm text-white'>{description}</p>
			</div>
			<button className='block rounded-md bg-red-700 text-xs outline-none border-none cursor-pointer py-2 px-4'>
				Add
			</button>
		</div>
	)
}

export default RecipeItem
