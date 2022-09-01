import React from 'react'

const Daughter = ({formState}) => {

  return (
    <fieldset>
      <legend>Daughter</legend>
      <h2>{formState.firstName} {formState.lastName}</h2>
    </fieldset>
  )
}

export default Daughter