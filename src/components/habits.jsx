import React, { Component } from 'react'
import AddForm from './addform'
import Habit from './habit'

class Habits extends Component {
  handleIncrement = habit => {
    this.props.onIncrement(habit)
  }
  handleDecrement = habit => {
    this.props.onDecrement(habit)
  }
  handleDelete = habit => {
    this.props.onDelete(habit)
  }
  handleAdd = name => {
    this.props.onAdd(name)
  }
  handleReset = habit => {
    this.props.onReset(habit)
  }

  render() {
    return (
      <>
        <AddForm onAdd={this.handleAdd}></AddForm>
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
