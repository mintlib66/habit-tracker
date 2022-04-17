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
    };

    handleIncrement = (habit) => {
        console.log(`handleIncrement ${habit.name}`);
        let copyHabits = [...this.state.habits];

        copyHabits.map(item => {
            if(item.id === habit.id){
                item.count++;
            }
            return item;
        });

        this.setState({
            habits: copyHabits
        });
        
    };
    handleDecrement = (habit) => {
        console.log(`handleDecrement${habit}`);
        let copyHabits = [...this.state.habits];

        copyHabits.map(item => {
            if(item.id === habit.id){
                item.count--;
            }
            return item;
        });

        this.setState({
            habits: copyHabits
        });
    };
    handleDelete = (habit) => {
        console.log(`handleDelete${habit}`);
        let copyHabits = this.state.habits.filter(item => item.id !== habit.id);

        this.setState({
            habits: copyHabits
        });
    };

    render() {
        return (
            <ul>
                {this.state.habits.map(habit => 
                     <Habit 
                        key={habit.id}  
                        habit={habit} 
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onDelete={this.handleDelete}
                     ></Habit>
                )}
            </ul>
        );
    }
}

export default Habits;