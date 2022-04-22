import './app.css';
import { Component } from 'react';
import Navbar from './components/navbar';
import Habits from './components/habits';

class App extends Component {
  state = {
    habits: [
      { id: 0, name: 'reading', count: 0 },
      { id: 1, name: 'running', count: 1 },
      { id: 2, name: 'coding', count: 0 },
    ],
  };

  handleIncrement = habit => {
    let habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    this.setState({ habits });
  };
  handleDecrement = habit => {
    let habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        return {
          ...habit,
          count: item.count > 0 ? habit.count - 1 : habit.count,
        };
      }
      return item;
    });
    this.setState({ habits });
  };
  handleDelete = habit => {
    let habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({ habits });
  };
  handleAdd = name => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
  };
  handleReset = () => {
    let habits = this.state.habits.map(item => {
      if (item.count !== 0) {
        return { ...item, count: 0 };
      }
      return item;
    });
    this.setState({ habits });
  };

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
    );
  }
}

export default App;
