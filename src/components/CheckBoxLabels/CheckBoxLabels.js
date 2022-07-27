import * as React from 'react'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { useArticlesContext } from '../../contexts/ArticlesContext'
import { articleTypes } from '../../helpers/ArticleTypes'

export const CheckboxLabels = () => {
  const { fetchArticles, removeArticle } = useArticlesContext()

  const { Fashion, Sports } = articleTypes

  const onChangeHandler = (isChecked, name) => {
    // fetch picked article type if user checked checkbox
    if (isChecked === true && name === Fashion) {
      fetchArticles(name)
    } else if (isChecked === true && name === Sports) {
      fetchArticles(name)
    }
    // delete picked articles if user checked checkbox
    if (isChecked === false && name === Sports) {
      removeArticle(name)
    } else if (isChecked === false && name === Fashion) {
      removeArticle(name)
    }
  }

  return (
    <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
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
