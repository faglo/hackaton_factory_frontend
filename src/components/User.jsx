import React from 'react'
import img1 from '../assets/images/img1.png'
import '../styles/User.css'
import dropdown from '../assets/icons/dropdown.svg'

export default function User() {
  const [user, setUser] = React.useState('Мария Иванова')
  const [city, setCity] = React.useState('Краснодар')
  return (
    <div className='userData'>
      <div className='userData__container'>
        <div className='userData__topText'>
          {user}
        </div>
        <div className='userData__bottomText'>
          {city}
        </div>
      </div>
      <img src={img1} className='userData__img' />
      <img src={dropdown} />
    </div>
  )
}
