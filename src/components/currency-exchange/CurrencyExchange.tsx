import CurrencyExchangeItem from './CurrencyExchangeItem'

/**
 * Рендер Блока "Обмен валюты"
 */
const CurrencyExchange = () => {
  return (
    <ul className="flex gap-2 justify-between">
      {Array.from({ length: 8 }, () => (
        <CurrencyExchangeItem currency='' delta='' number='' />
      ))}
    </ul>
  )
}

export default CurrencyExchange
