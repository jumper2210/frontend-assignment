import React from 'react'
import './Home.css'
import SortIcon from '@mui/icons-material/Sort'
import { CheckboxLabels } from '../../components/CheckBoxLabels/CheckBoxLabels'
import { Articles } from '../../components/Articles/Articles'

export const Home = () => {
  return (
    <main className='home'>
      <div className='container'>
        <div className='sort-item'>
          <span>Sort by date</span>
          <SortIcon />
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
