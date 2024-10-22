import { FC } from 'react'

interface RandomSearchProps {
  text: string
}

/**
 * Рендер блока с выводом случайного текста для поиска
 *
 * Props:
 * - `text: string` - Случайный текст
 */
const RandomSearch: FC<RandomSearchProps> = ({ text }) => {
  return <div className="bg-black max-w-[30%]">{text}</div>
}

export default RandomSearch
