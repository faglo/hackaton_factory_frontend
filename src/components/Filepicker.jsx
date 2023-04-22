import React from 'react'
import '../styles/Filepicker.css'
import plusIcon from '../assets/icons/plus.svg'

export default function Filepicker () {
  return (
    <div className='filepicker__container'>
      <div className='filepicker__add__container'>
        <div className='filepicker__add'>
          <img src={plusIcon}/>
        </div>
        <span className='filepicker__add__text'>
          Перетащите файл сюда или нажмите на кнопку
        </span>
      </div>
      <div className='filepicker__add__btn'>
        Выбрать файл
      </div>
    </div>
  )
}
