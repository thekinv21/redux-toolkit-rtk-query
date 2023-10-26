import { RootState } from '@/store/store'
import { FC } from 'react'
import { BsFillBagHeartFill } from 'react-icons/bs'
import { useSelector } from 'react-redux'

const Header: FC = () => {
	const { favorites } = useSelector((state: RootState) => state.reducers)

	return (
		<div className='w-full h-36'>
			<div className='flex justify-between items-center px-10'>
				<h1>Recipes</h1>

				<div>
					<BsFillBagHeartFill size={30} />
					<span className='absolute top-2 right-8'>{favorites.length}</span>
				</div>
			</div>
		</div>
	)
}

export default Header
