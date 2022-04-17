import React, { Component, useState } from 'react';

class Habit extends Component {
    state = {
        count: 0,
    };

    handleIncreament = () => {
        this.setState({count: this.state.count +1});
    };
    handleDecreament = () => {
        const count = this.state.count -1;
        //0미만으로 안내려가게 
        this.setState({count: count < 0 ? 0 : count });
    };

    render() {
        const {name, count} = this.props.habit;
    
        return (
            <li className='habit'>
                <span className='habit-name'>{name}</span>
                <span className='habit-count'>{count}</span>
                <button className='habit-button habit-increase' onClick={this.handleIncreament}>
                    <i className="fa-solid fa-square-plus"></i>
                </button>
                <button className='habit-button habit-decrease' onClick={this.handleDecreament}>
                    <i className="fa-solid fa-square-minus"></i>
                </button>
                <button className='habit-button habit-delete'>
                    <i className="fa-solid fa-trash"></i>
                </button>
            </li>
        );
    }
}

export default Habit;