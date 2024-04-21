import Link from 'next/link'
import NavItems from './navItems'

const Nav = () => {
  return (
    <div className='dark:bg-gray-600 bg-amber-100 text-lg font-semibold  my-2 p-4 flex justify-center gap-6'>  
      <NavItems title='Trending' param='fetchTrending' />
      <NavItems title='Top Rated' param='fetchTopRated' />
        </div>
  )
}

export default Nav