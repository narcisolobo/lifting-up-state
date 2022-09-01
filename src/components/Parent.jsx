import React from 'react'
import { useState } from 'react'
import Daughter from './Daughter'
import Son from './Son'

const Parent = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: ''
  })
  return (
    <fieldset>
      <legend>Parent</legend>
      <Son formState = {formState} setFormState = {setFormState} />
      <Daughter formState = {formState} />
    </fieldset>
  )
}

export default Parent