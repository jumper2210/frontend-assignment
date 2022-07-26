import * as React from 'react'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

export const CheckboxLabels = () => {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox />} label='Fashion' />
      <FormControlLabel control={<Checkbox />} label='Sports' />
    </FormGroup>
  )
}
