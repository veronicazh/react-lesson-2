import React from 'react'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'


class TodoItem extends React.Component {

  render() {

    const { item, isCompleted, id, onItemClick, onIconClick } = this.props

    return (
      <div className='todoItemRoot'>
        <div className={isCompleted ? 'todoItem todoItem_completed' : 'todoItem'} onClick={() => onItemClick(id)}>
          {item.title}
        </div>
        <FontAwesomeIcon icon={solid('circle-xmark')} className='deleteIcon' size='xl' onClick={() => onIconClick(id)}/>
      </div>
    )
  }
}

export default TodoItem;