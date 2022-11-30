import React from 'react'
import './index.css'

class Form extends React.Component {

  render () {

    const {onSubmit, onChange, inputValue} = this.props

    return(
      <form onSubmit={onSubmit}>
        <input value={inputValue} onChange={onChange}/>
        <button className='addButton' type='submit'>Add</button>
      </form>
    )
  }

}

export default Form;