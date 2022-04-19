import { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-box">
          <i className="nav-logo fa-solid fa-leaf"></i>
          <h1 className="nav-title">Habit Tracker</h1>
          <span className="nav-count">{this.props.totalCount}</span>
        </div>
      </nav>
    )
  }
}

export default Navbar
