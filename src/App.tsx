import { FC } from 'react'
import Header from './components/header/Header'
import RecipeItem from './components/recipe-item/RecipeItem'

const App: FC = () => {
	return (
		<div className='flex flex-col justify-start items-center w-screen h-screen overflow-hidden'>
			<Header />

			<h1 className='mb-10 text-3xl'>Redux Toolkit</h1>

			<section className='flex flex-col justify-center items-center space-y-5 w-[400px]'>
				<RecipeItem id={1} name='Çorba' description='Very Good' />
				<RecipeItem id={2} name='Pizza' description='Fast Food' />
				<RecipeItem id={3} name='Lahmacun' description='Sıcak' />
				<RecipeItem id={4} name='Köfte' description='Yusuf Köffte' />
			</section>
		</div>
	)
}

export default App
