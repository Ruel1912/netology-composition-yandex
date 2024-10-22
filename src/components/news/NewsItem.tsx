import { FC } from 'react'

interface NewsItemProps {
  icon: string
  title: string
  link: string
}

/**
 * Рендер статьи новостей
 *
 * Props:
 * - `icon: string` - иконка статьи
 * - `title: string` - Заголовок статьи
 * - `link: string` - Ссылка для перехода на страницу
 */
const NewsItem: FC<NewsItemProps> = ({ icon, title, link }) => {
  return (
    <li>
      <a href={link} className="flex items-center gap-2">
        <i
          style={{ minHeight: 16 }}
          className="block min-h-4 w-4 h-4 max-w-4 rounded-full bg-green-600"
        >
          {icon}
        </i>
        <span className="block bg-green-950 max-h-4 mb-2">{title}</span>
      </a>
    </li>
  )
}

export default NewsItem
