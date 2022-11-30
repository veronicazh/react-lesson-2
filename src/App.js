import React from 'react'
import './App.css';
import TodoItem from './components/TodoItem'
import Form from './components/Form'


class App extends React.Component {

  state = {
    todos: [],
    inputValue: ''
  }

  onInputChange = (e) => {
    this.setState({ inputValue: e.target.value })
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    this.setState({todos: [...this.state.todos, {title: this.state.inputValue, id: Math.random(), isCompleted: false},]})
    this.setState({inputValue: ''})
  }

  onItemClick = (id) => {
    let stringArray = JSON.stringify(this.state.todos)
    let deepArrayCopy = JSON.parse(stringArray)
    const clickedElementIndex = deepArrayCopy.findIndex((el) => el.id === id)
    deepArrayCopy[clickedElementIndex].isCompleted = !deepArrayCopy[clickedElementIndex].isCompleted
    this.setState({todos: deepArrayCopy})
  }

  onIconClick = (id) => {
    let stringArray = JSON.stringify(this.state.todos)
    let deepArrayCopy = JSON.parse(stringArray)
    const clickedElementIndex = deepArrayCopy.findIndex((el) => el.id === id)
    deepArrayCopy.splice(clickedElementIndex, 1)
    this.setState({todos: deepArrayCopy })
  }

  render () {
    return (
      <div className='root'>
        <span className='mainTitle'>Todo List</span>
        <ul>
          {this.state.todos.map((item) => {
            return <TodoItem 
              item={item} 
              id={item.id}
              isCompleted={item.isCompleted}
              onItemClick={this.onItemClick}
              onIconClick={this.onIconClick}
              key={item.id}/>})
          } 
        </ul>
        <Form 
          onSubmit={this.onFormSubmit} 
          onChange={this.onInputChange} 
          inputValue={this.state.inputValue}
        />
      </div>
    )
  }
}

export default App;
