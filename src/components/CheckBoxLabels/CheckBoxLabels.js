import * as React from 'react'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { useArticlesContext } from '../../contexts/ArticlesContext'
import { articleTypes } from '../../helpers/ArticleTypes'

export const CheckboxLabels = () => {
  const { fetchArticles, removeArticles } = useArticlesContext()

  const { Fashion, Sports } = articleTypes
  // labels can be streamlined to listen for whether data came with an error from the server.
  // labels should then be automatically set to non checked
  const onChangeHandler = (isChecked, name) => {
    // fetch picked article type if user checked checkbox
    if (isChecked === true && name === Fashion) {
      fetchArticles(name)
    } else if (isChecked === true && name === Sports) {
      fetchArticles(name)
    }
    // delete picked articles if user checked checkbox
    if (isChecked === false && name === Sports) {
      removeArticles(name)
    } else if (isChecked === false && name === Fashion) {
      removeArticles(name)
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
