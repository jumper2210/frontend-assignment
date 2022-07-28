import React from 'react'
import './Home.css'
import SortIcon from '@mui/icons-material/Sort'
import { CheckboxLabels } from '../../components/CheckBoxLabels/CheckBoxLabels'
import { Articles } from '../../components/Articles/Articles'
import { useArticlesContext } from '../../contexts/ArticlesContext'

export const Home = () => {
  const { sortArticlesHandler } = useArticlesContext()

  return (
    <main className='home'>
      <div className='container'>
        <div className='sort-item'>
          <span
            style={{
              coursor: 'pointer',
              textDecoration: 'underline',
              paddingRight: '5px',
            }}
            onClick={() => sortArticlesHandler()}
          >
            Sort by date
          </span>
          <SortIcon />
        </div>
        <div className='data-sources'>
          <span
            style={{
              textDecoration: 'underline',
            }}
          >
            Data sources
          </span>
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
