import AdsBanner from './ads/AdsBanner'
import CurrencyExchange from './currency-exchange/CurrencyExchange'
import News from './news/News'
import SearchBar from './searchbar/SearchBar'
import WidgetList from './widget/WidgetList'
import WorkError from './work-error/WorkError'

const YandexPage = () => {
  return (
    <div className="body flex flex-col gap-4 w-full p-4">
      <div className="flex gap-4 justify-between items-center">
        <div className="flex-grow min-w-[70%]">
          <News />
          <CurrencyExchange />
        </div>

        <WorkError image='https://www.aluminati.net/wp-content/uploads/2016/03/img-placeholder.png' title='' link='#'>
          <div className="bg-slate-900"></div>
        </WorkError>
      </div>

      <SearchBar />
      <AdsBanner image='https://www.aluminati.net/wp-content/uploads/2016/03/img-placeholder.png' link='#' />
      <WidgetList />
    </div>
  )
}

export default YandexPage
