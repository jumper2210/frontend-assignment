import React from 'react'
import './Home.css'
import { CheckboxLabels } from '../../components/CheckBoxLabels/CheckBoxLabels'
import { Articles } from '../../components/Articles/Articles'
import { Sort } from '../../components/Sort'

export const Home = () => {
  return (
    <main className='home'>
      <div className='container'>
        <div className='sort-item'>
          <Sort />
        </div>
        <div className='data-sources'>
          <span>Data sources</span>
          <div>
            <CheckboxLabels />
          </div>
        </div>
        <div className='articles'>
          <Articles />
        </div>
      </div>
    </main>
  )
}
