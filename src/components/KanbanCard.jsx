import React from 'react'
import img2 from '../assets/images/img2.png'
import img3 from '../assets/images/img3.png'
import star from '../assets/icons/star.svg'
import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'

export default function KanbanCard ({
  id,
  did,
  company,
  date,
  name,
  pricePerUnit,
  price,
  btnName = 'Взять в работу'
}) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id })
  const style = {
    transform: CSS.Translate.toString(transform)
  }
  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <div className='cka__container'>
        <div className='cka__header__container'>
          <img className='cka__header__img' src={img2}/>
          <div className='cka__header__text__container'>
            <div className='cka__header__text__container__title'>
              {company}
            </div>
            <div className='cka__header__text__container__subtitle'>
              Договор № {did}
            </div>
          </div>
          <div className='cka__header__text__container__stars'>
            <img src={star}/>
            <img src={star}/>
          </div>
          <div className='cka__header__text__container__date'>
            {date}
          </div>
        </div>
        <div className='cka__body__container'>
          <img className='cka__body__img' src={img3}/>
          <span className='cka__body__desc'>{name}</span>
        </div>
        <div className='cka_actions_container'>
          <div className='cka_actions_texts_container'>
            <div className='cka_actions_text'>{pricePerUnit} ₽/шт</div>
            <div className='cka_actions_text'>{price} ₽</div>
          </div>
          <div className='cka_actions_buttons_container'>
            <div className='cka_actions_button_reject'>Отклонить</div>
            <div className='cka_actions_button_accept'>{btnName}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
