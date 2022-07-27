import * as React from 'react'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { useArticlesContext } from '../../contexts/ArticlesContext'
import { articleTypes } from '../../helpers/ArticleTypes'

export const CheckboxLabels = () => {
  const {
    fetchArticlesOfSport,
    fetchArticlesOfFashion,
    setArticlesOfSport,
    setArticlesOfFashion,
  } = useArticlesContext()
  const { Fashion, Sports } = articleTypes

  const onChangeHandler = (isChecked, name) => {
    if (isChecked === true && name === Fashion) {
      fetchArticlesOfFashion()
    } else if (isChecked === true && name === Sports) {
      fetchArticlesOfSport()
    }
    if (isChecked === false && name === Sports) {
      setArticlesOfSport([])
    } else if (isChecked === false && name === Fashion) {
      setArticlesOfFashion([])
    }
  }

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            onChange={(e) => onChangeHandler(e.target.checked, e.target.name)}
            name={Fashion}
          />
        }
        label={Fashion}
      />
      <FormControlLabel
        control={
          <Checkbox
            onChange={(e) => onChangeHandler(e.target.checked, e.target.name)}
            name={Sports}
          />
        }
        label={Sports}
      />
    </FormGroup>
  )
}
