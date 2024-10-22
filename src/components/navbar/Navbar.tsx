import NavbarItem from './NavbarItem'

/**
 * Рендер Блока навигации
 */
const Navbar = () => {
  return (
    <div>
      <ul className='flex gap-2'>
        {Array.from({ length: 7 }, () => (
          <NavbarItem title='' link='' />
        ))}
      </ul>
    </div>
  )
}

export default Navbar
