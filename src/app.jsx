import './app.css'
import { Component } from 'react'
import Navbar from './components/navbar'
import Habits from './components/habits'

class App extends Component {
  state = {
    habits: [
      { id: 0, name: 'reading', count: 0 },
      { id: 1, name: 'running', count: 1 },
      { id: 2, name: 'coding', count: 0 },
    ],
  }

  handleIncrement = habit => {
    let habits = [...this.state.habits]
    const index = habits.indexOf(habit)
    habits[index].count++
    this.setState({ habits })
  }
  handleDecrement = habit => {
    let habits = [...this.state.habits]
    const index = habits.indexOf(habit)
    if (habits[index].count > 0) {
      habits[index].count--
    }
    this.setState({ habits })
  }
  handleDelete = habit => {
    let habits = this.state.habits.filter(item => item.id !== habit.id)
    this.setState({ habits })
  }
  handleAdd = name => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }]
    this.setState({ habits })
  }
  handleReset = () => {
    let habits = [...this.state.habits]
    habits = habits.map(item => {
      item.count = 0
      return item
    })
    this.setState({ habits })
  }

  render() {
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter(item => item.count > 0).length}
        >
          Habit Tracker
        </Navbar>
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        ></Habits>
      </>
    )
  }
}

export default App
