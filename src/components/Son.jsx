import React from 'react'

const Son = (props) => {
  const {formState, setFormState} = props;
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  return (
    <fieldset>
      <legend>SON</legend>
      <form>
        <label>First Name:</label>
        <input
          name='firstName'
          type="text"
          value={formState.firstName}
          onChange={e => {handleChange(e)}}
        />
        <label>Last Name:</label>
        <input
          name='lastName'
          type="text"
          value={formState.lastName}
          onChange={e => {handleChange(e)}}
        />
      </form>
    </fieldset>
  )
}

export default Son