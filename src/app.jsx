import './app.css'
import { Component } from 'react'
import Navbar from './components/navbar'
import InputField from './components/inputfield'
import Habits from './components/habits'

class App extends Component {
  state = {
    input: '',
    habits: [
      { id: 0, name: 'reading', count: 0 },
      { id: 1, name: 'running', count: 1 },
      { id: 2, name: 'coding', count: 0 },
    ],
  }

  handleIncrement = habits => {
    this.setState({ habits })
  }
  handleDecrement = habits => {
    this.setState({ habits })
  }

  handleDelete = habits => {
    this.setState({ habits })
  }
  handleReset = habits => {
    this.setState({ habits })
  }

  render() {
    return (
      <>
        <Navbar habits={this.state.habits}>Habit Tracker</Navbar>
        <InputField></InputField>
        <Habits
          title="like"
          input={this.state.input}
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onAdd={this.handleAdd}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
        ></Habits>
      </>
    )
  }
}

export default App
