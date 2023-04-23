import React from 'react'
import KanbanCard from '../components/KanbanCard'
import Modal from '../components/Modal'
import mdiChat from '../assets/icons/mdi-chat.svg'
import printIcon from '../assets/icons/print.svg'
import img3 from '../assets/images/img3.png'
import img2 from '../assets/images/img2.png'
import excelIcon from '../assets/icons/excel.svg'
import wordIcon from '../assets/icons/word.svg'

export default function Tasks () {
  const cats = ['новые', 'в работе', 'доп. проверка', 'на согласовании', 'готово']
  const [active, setActive] = React.useState('новые')
  const [modalOpened, setModalOpened] = React.useState(false)
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
      <div className='category__container'>
        {cats.map((cat, index) =>
          <div className='category__item' key={index}
            id={active === cat ? 'active__category' : ''}
            onClick={() => setActive(cat)}
          >
              {cat}
          </div>
        )}
      </div>
      <div className='main__content_wv'>
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
                colID={2}
                minified
                btnName='Рассмотреть'
                onClick={() => setModalOpened(true)}
              />
            )
          }
      </div>
      <Modal
        open={modalOpened}
        onClose={() => setModalOpened(false)}
      >
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
            <div className='invoice__top_fields'>
              <input type='text' placeholder='Опыт аналогичных работ' className='invoice__top_field' />
              <input type='text' placeholder='Стоимость' className='invoice__top_field' />
              <input type='text' placeholder='Срок' className='invoice__top_field' />
            </div>
            <div className='invoice__top_fields'>
              <input type='text' placeholder='Комментарий' className='invoice__top_field' />
              <div className='invoice__body__btn'>
                Подать заявку
              </div>
            </div>
          </div>
      </Modal>
    </div>
  )
}
