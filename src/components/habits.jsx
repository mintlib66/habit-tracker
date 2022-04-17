import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    state = {
        habits: [
            {id:0, name: 'reading', count: 0},
            {id:1, name: 'running', count: 1},
            {id:2, name: 'coding', count: 0},
            {id:3, name: 'eating', count:2}
        ]
    }
    render() {
        return (
            <ul>
                {this.state.habits.map(habit => 
                     <Habit key={habit.id} habit={habit}></Habit>
                )}
            </ul>
        );
    }
}

export default Habits;