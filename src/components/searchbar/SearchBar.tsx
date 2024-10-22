import Navbar from '../navbar/Navbar'
import RandomSearch from './RandomSearch'
import SearchForm from './SearchForm'

/**
 * Рендер поискового блока
 */
const SearchBar = () => {
  return (
    <div className='mt-10'>
      <Navbar />
      <SearchForm />
      <RandomSearch text='' />
    </div>
  )
}

export default SearchBar
