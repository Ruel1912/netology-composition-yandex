import Widget from './Widget'

/**
 * Рендер Блока "Список виджетов"
 *
 */
const WidgetList = () => {
  return (
    <div className="flex gap-8 flex-wrap">
      {Array.from({ length: 6 }, () => (
        <Widget title="" link="#">
          <div className="bg-slate-500 mih-h-20 h-20"></div>
        </Widget>
      ))}
    </div>
  )
}

export default WidgetList
