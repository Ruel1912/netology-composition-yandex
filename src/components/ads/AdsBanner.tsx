import { FC } from 'react'

interface AdsBannerProps {
  image: string
  link: string
}

/**
 * Рендер Блока "Рекламный баннер"
 *
 * Props:
 * - `image: string` - URL для изображения
 * - `link: string` - Ссылка для перехода
 */
const AdsBanner: FC<AdsBannerProps> = ({ image, link }) => {
  return (
    <a
      href={link}
      style={{ background: '#dcdcdc' }}
      className="h-40 mi-h-40 mt-8 mb-12 overflow-hidden"
    >
      <img
        className="h-full object-contain object-center"
        src={image}
        alt="ads"
      />
    </a>
  )
}

export default AdsBanner
