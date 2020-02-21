import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    state = {
        title: ''
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''})
    }

    onChange = (e) => this.setState({ title: e.target.value});

    render() {
        return (
            <form onSubmit={this.onSubmit} className="row addtodo">
                <input className="col-9 textinput" type="text" name="title" placeholder="Add a Todo..." 
                    value={this.state.title} onChange={this.onChange}/>
                <input className="col-3 btn" type="submit" value="Add"/>
            </form>           
        )
    }
}

//ProPtypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
  }

export default AddTodo;
