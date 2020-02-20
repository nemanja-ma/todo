import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

    getStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc solid',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const {id, title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
                    {title}
                    <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>x</button>
                </p>
            </div>
        )
    }
}

const btnStyle = {
    background: '#ACE7FF',
    color: 'white',
    border: 'none',
    padding: '1px 5px 3px 5px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

const checkbox = {
    padding: '5px 60px 5px 5px'
}
export default TodoItem
