import { FC, ReactNode } from 'react'

interface WorkErrorProps {
  children?: ReactNode
  image: string
  link: string
  title: string
}

/**
 * Рендер Блока "Работа над ошибками"
 *
 * Props:
 * - `image: string` - URL для изображения
 * - `link: string` - Ссылка для перехода на страницу
 * - `title: string` - Заголовок
 * - `children?: ReactNode` - Внутреннее содержимое
 */
const WorkError: FC<WorkErrorProps> = ({ image, title, link, children }) => {
  return (
    <div>
      <img
        src={image}
        className="w-32 h-32 max-w-32 block rounded-full mb-8 object-cover"
      />
      <a href={link} className="block bg-blue-900 mb-1 max-w-[60%]">
        {title}
      </a>
      {children}
    </div>
  )
}

export default WorkError
