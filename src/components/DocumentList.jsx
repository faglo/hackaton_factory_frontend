import React from 'react'
import '../styles/DocumentList.css'
import marker from '../assets/icons/marker.svg'

export default function DocumentList () {
  return (
        <div>
            <div className="document__marker__container">
                <button className="document__marker_btn">
                    <img src={marker} alt=""/>
                </button>
            </div>
            <div className='document__container'>
                <div className="document__list__container">
                    <div className='document__content'>

                    </div>
                </div>
            </div>

        </div>
  )
}
