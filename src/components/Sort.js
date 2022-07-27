import React from 'react'
import SortIcon from '@mui/icons-material/Sort'
import { useArticlesContext } from '../contexts/ArticlesContext'

export const Sort = () => {
  const { sortArticlesHandler } = useArticlesContext()
  return (
    <>
      <div onClick={() => sortArticlesHandler()}>Sort by date</div>
      <SortIcon />
    </>
  )
}
