import React from 'react'
import '../styles/Main.css'
import dropdown from '../assets/icons/dropdown.svg'
import Dropdown from 'react-dropdown'
import KanbanCard from '../components/KanbanCard'
export default function Main () {
  const mock = [
    {
      id: 1,
      name: 'Балки. Тендер №12',
      company: 'ООО “Дорстрой”',
      did: '12344567',
      price: '520 тыс.',
      date: '21.04',
      stars: 2,
      pricePerUnit: '1000',
      columnID: 1
    },
    {
      id: 2,
      name: 'Балки. Тендер №12',
      company: 'ООО “Дорстрой”',
      did: '12344567',
      price: '520 тыс.',
      date: '21.04',
      stars: 2,
      pricePerUnit: '1000',
      columnID: 1
    },
    {
      id: 3,
      name: 'Балки. Тендер №12',
      company: 'ООО “Дорстрой”',
      did: '12344567',
      price: '520 тыс.',
      date: '21.04',
      stars: 2,
      pricePerUnit: '1000',
      columnID: 2
    },
    {
      id: 4,
      name: 'Балки. Тендер №12',
      company: 'ООО “Дорстрой”',
      did: '12344567',
      price: '520 тыс.',
      date: '21.04',
      stars: 2,
      pricePerUnit: '1000',
      columnID: 3
    }
  ]
  return (
    <div>
      <div className='main__header'>
        <div className='main__header__head'>
          Рекомендации
        </div>
        <div className='main__header__cta'>
          Сортировка:
        </div>
        <div>
          не выбрана
        </div>
        <img src={dropdown} />
      </div>
      <div className='main__filter'>
        <Dropdown
          options={[
            'Подача заявок'
          ]}
          value='Подача заявок'
          controlClassName='main__filter__dropdown'
          arrowClosed={<img src={dropdown} />}
          arrowOpen={<img src={dropdown} style={{
            transform: 'rotate(180deg)'
          }}/>}
          placeholderClassName='main__filter__placeholder'
          menuClassName='main__filter__menu'
        />
        <Dropdown
          options={[
            'Закупка коммерческих четотам'
          ]}
          value='Закупка коммерческих четотам'
          controlClassName='main__filter__dropdown'
          arrowClosed={<img src={dropdown} />}
          arrowOpen={<img src={dropdown} style={{
            transform: 'rotate(180deg)'
          }}/>}
          placeholderClassName='main__filter__placeholder'
          menuClassName='main__filter__menu'
        />
        <Dropdown
          options={[
            'Краснодарский край',
            'Республика Адыгея',
            'Республика Алтай',
            'Республика Башкортостан',
            'Республика Бурятия',
            'Республика Дагестан',
            'Республика Ингушетия',
            'Республика Калмыкия',
            'Республика Карелия'
          ]}
          value={null}
          placeholder='Регион'
          controlClassName='main__filter__dropdown'
          arrowClosed={<img src={dropdown} />}
          arrowOpen={<img src={dropdown} style={{
            transform: 'rotate(180deg)'
          }}/>}
          placeholderClassName='main__filter__placeholder'
          menuClassName='main__filter__menu'
        />
        <Dropdown
          options={[
            'Организатор 1',
            'Организатор 2',
            'Организатор 3',
            'Организатор 4',
            'Организатор 5',
            'Организатор 6',
            'Организатор 7'
          ]}
          value={null}
          placeholder='Организаторы'
          controlClassName='main__filter__dropdown'
          arrowClosed={<img src={dropdown} />}
          arrowOpen={<img src={dropdown} style={{
            transform: 'rotate(180deg)'
          }}/>}
          placeholderClassName='main__filter__placeholder'
          menuClassName='main__filter__menu'
        />
        <div className='main__filter__outlined_btn'>
          Полный фильтр
        </div>
        <div className='main__filter__btn'>
          Применить
        </div>
      </div>
      <div className='main__content'>
          {
            mock.map((item) =>
            <KanbanCard
              key={item.id}
              name={item.name}
              company={item.company}
              did={item.did}
              price={item.price}
              date={item.date}
              stars={item.stars}
              pricePerUnit={item.pricePerUnit}
              colID={1}
              minified
              btnName='Рассмотреть'
            />)
          }
      </div>
    </div>
  )
}
