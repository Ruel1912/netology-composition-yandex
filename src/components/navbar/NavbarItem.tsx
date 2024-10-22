import { FC } from 'react'

interface NavbarItemProps {
  title: string
  link: string
}

/**
 * Рендер элемента навигации
 *
 * Props:
 * - `title: string` - Заголовок
 * - `link: string` - Ссылка для перехода на страницу
 */
const NavbarItem: FC<NavbarItemProps> = ({ title, link }) => {
  return (
    <li className="bg-blue-900">
      <a href={link}>{title}</a>
    </li>
  )
}

export default NavbarItem
