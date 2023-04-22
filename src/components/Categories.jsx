import React from 'react'
import '../styles/Categories.css'
import dropdown from '../assets/icons/dropdown.svg'
export default function Categories () {
  const [active, setActive] = React.useState('новые')
  const cats = ['новые', 'в работе', 'доп. проверка', 'на согласовании', 'готово']
  return (
    <div className='category__container__main'>
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
      <div className='category__dropdown__container'>
        <div className='container__dropdown__text'>
          Отдел
        </div>
        <img src={dropdown} />
      </div>
    </div>
  )
}
