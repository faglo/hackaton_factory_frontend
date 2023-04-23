import React from 'react'
import '../styles/Main.css'
import dropdown from '../assets/icons/dropdown.svg'
import Dropdown from 'react-dropdown'
import KanbanCard from '../components/KanbanCard'
import Modal from '../components/Modal'
import mdiChat from '../assets/icons/mdi-chat.svg'
import printIcon from '../assets/icons/print.svg'
import img3 from '../assets/images/img3.png'
import img2 from '../assets/images/img2.png'
import excelIcon from '../assets/icons/excel.svg'
import wordIcon from '../assets/icons/word.svg'
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
  const tableData = [
    {
      name: 'Описание секции',
      desc: 'Закупки корпоративных заказчиков'
    },
    {
      name: 'Номер извещения',
      desc: 'ГП363259'
    },
    {
      name: 'Номер закупки',
      desc: 'Консоль, Ограничитель консоли, Опора двусторонняя СТ-062, Стойка вертикальная опорная (балка), лот 147.'
    },
    {
      name: 'Наименование закупки',
      desc: 'Консоль, Ограничитель консоли, Опора двусторонняя СТ-062, Стойка вертикальная опорная (балка), лот 147.'
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

      <Modal>
          <div className='invoice__header'>
            <div className='invoice__title'>
              № ГП363259
            </div>
            <div className='invoice__status'>
              Подача заявок
            </div>
            <div className='invoice__status__second'>
              Торги без ЭП
            </div>

            <div className='invoice__chat__btn'>
              <span className='invoice__chat__btn__span'>
                чат
              </span>
              <img src={mdiChat} />
            </div>
            <img src={printIcon} />
          </div>
          <div className='invoice__body__container'>
            <img className='invoice__body__userpic' src={img2}/>
            <img className='cka__body__img' src={img3}/>
            <span className='invoice__body__desc'>
              Консоль, Ограничитель консоли, Опора двусторонняя СТ-062, Стойка вертикальная опорная (балка), лот 147.
            </span>
          </div>
          <div className='invoice__table__container'>
            {
              tableData.map((item, idx) =>
              <div className='invoice__table__row' key={idx}>
                <div className='invoice__table__row__name'>
                  {item.name}
                </div>
                <div className='invoice__table__row__desc'>
                  {item.desc}
                </div>
              </div>)
            }
          </div>
          <div className='invoice__processing'>
            <div className='invoice__processing__title'>
              Документация процедуры
            </div>
            <div className='invoice__processing__items'>
              <div className='invoice__processing__item'>
                <img src={wordIcon} />
                <span className='invoice__processing__item__name'>
                Извещение.doc
                </span>
              </div>
              <div className='invoice__processing__item'>
                <img src={excelIcon} />
                <span className='invoice__processing__item__name'>
                ТЗ.xlsx
                </span>
              </div>
            </div>
          </div>
          <div className='invoice__fields__container'>
            <div className='invoice__processing__title'>
              Заполните
            </div>
          </div>
      </Modal>
    </div>
  )
}
