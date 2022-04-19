import { Component } from 'react'

class InputField extends Component {
  render() {
    return (
      <div className="habit-top">
        <input type="text" placeholder="Input habit" className="habit-input" />
        <button className="habit-btn habit-add">Add</button>
      </div>
    )
  }
}

export default InputField
