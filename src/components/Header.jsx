import React from 'react'
import logo from '../assets/logo.svg'
import bell from '../assets/icons/bell.svg'
import calendar from '../assets/icons/calendar.svg'
import search from '../assets/icons/search.svg'
import User from './User'
import '../styles/Header.css'

export default function Header() {
  return (
    <div className='header'>
      <img src={logo}/>
      <div className='inputContainer'>
        <img src={search} className='inputContainer__icon'/>
        <input
          className='input'
          placeholder="Поиск"
          type="text"
        />
      </div>
      <div className='header__actions'>
        <div className='header__buttons'>
          <img src={calendar}/>
          <img src={bell}/>
        </div>
        <User/>
      </div>
    </div>
  )
}
