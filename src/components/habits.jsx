import React, { Component } from 'react'
import Habit from './habit'

class Habits extends Component {
  handleIncrement = habit => {
    console.log(`handleIncrement ${habit.name}`)
    let habits = [...this.props.habits]
    const index = habits.indexOf(habit)
    habits[index].count++
    this.props.onIncrement(this.props.habits)
  }
  handleDecrement = habit => {
    console.log(`handleDecrement${habit}`)
    let habits = [...this.props.habits]
    const index = habits.indexOf(habit)
    if (habits[index].count > 0) {
      habits[index].count--
    }
    this.props.onDecrement(this.props.habits)
  }
  handleDelete = habit => {
    console.log(`handleDelete${habit}`)
    let habits = this.props.habits.filter(item => item.id !== habit.id)
    this.props.onDelete(habits)
  }
  handleReset = () => {
    console.log(`handleReset`)
    let habits = [...this.props.habits]
    habits = habits.map(item => {
      item.count = 0
      return item
    })
    this.props.onReset(habits)
  }

  render() {
    return (
      <>
        <ul className="habit-list">
          {this.props.habits.map(habit => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
            ></Habit>
          ))}
        </ul>
        <button className="habit-btn habit-reset" onClick={this.handleReset}>
          Reset All
        </button>
      </>
    )
  }
}

export default Habits
