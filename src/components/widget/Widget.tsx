import { FC, ReactNode } from 'react'

interface WidgetListProps {
  children?: ReactNode
  title: string
  link: string
}

/**
 * Рендер виджета
 *
 * Props:
 * - `title: string` - Заголовок
 * - `link: string` - Ссылка для перехода на страницу
 * - `children?: ReactNode` - Внутреннее содержимое
 */
const Widget: FC<WidgetListProps> = ({ title, link, children }) => {
  return (
    <div className="max-w-[400px]">
      <a href={link} className="block max-w-[40%] bg-blue-950 mb-2">
        {title}
      </a>
      {children}
    </div>
  )
}

export default Widget
