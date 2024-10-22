import { FC } from 'react'

interface CurrencyExchangeItemProps {
  currency: string
  number: string
  delta: string
}

/**
 * Рендер Элемнта обмена валюты
 *
 * Props:
 * - `currency: string` - Валюта
 * - `number: string` - Значение
 * - `delta: string` - Разница с предыдущим значением
 */
const CurrencyExchangeItem: FC<CurrencyExchangeItemProps> = ({
  currency,
  number,
  delta,
}) => {
  return (
    <li className="flex max-w-20 bg-zinc-400">
      <b>{currency}</b> <span>{number}</span> <span>{delta}</span>
    </li>
  )
}

export default CurrencyExchangeItem
