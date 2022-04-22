import React, { PureComponent } from 'react';
class AddForm extends PureComponent {
  inputRef = React.createRef();
  onSubmit = event => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.inputRef.current.value = '';
  };

  render() {
    return (
      <form className="add-form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          placeholder="Input habit"
          className="add-input"
        />
        <button className="habit-btn add-btn">Add</button>
      </form>
    );
  }
}

export default AddForm;
