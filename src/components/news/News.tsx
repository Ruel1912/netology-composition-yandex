import NewsItem from './NewsItem'

/**
 * Рендер Блока новости
 */
const News = () => {
  return (
    <div className="p-2 mb-2">
      <h1 className="bg-green-600 mb-4"></h1>
      <ul>
        {Array.from({ length: 7 }, () => (
          <NewsItem icon='' link='' title='' />
        ))}
      </ul>
    </div>
  )
}

export default News
