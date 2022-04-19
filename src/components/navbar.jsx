import { Component } from 'react'

class Navbar extends Component {
  render() {
    let count = this.props.habits.reduce((acc, item) => {
      if (item.count > 0) {
        acc++
      }
      return acc
    }, 0)
    return (
      <nav>
        <div className="nav-box">
          <i className="fa-solid fa-leaf"></i>
          <h1 className="nav-title">Habit Tracker</h1>
          <span className="nav-count">{count}</span>
        </div>
      </nav>
    )
  }
}

export default Navbar
