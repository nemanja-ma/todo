import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

    getStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const {id, title} = this.props.todo;
        return (
            <div className="container" style={this.getStyle()}>
                <div className="row todo">
                    <div className="col-1">
                        <input className="checkbox" type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
                    </div>
                    <div className="col-10">
                        {title}
                    </div>
                    <div className="col-1">
                        <button className="btnStyle" onClick={this.props.delTodo.bind(this, id)}>x</button>
                    </div>
                </div>
            </div>
        )
    }
}

//ProPtypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
  }

export default TodoItem
