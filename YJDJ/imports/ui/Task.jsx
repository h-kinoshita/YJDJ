import React, { Component, PropTypes } from 'react';

//Task component = represents a single todo item

export default class Task extends Component {
    render() {
        return (
            <li key={this.props.task._id}>{this.props.task.text}</li>
        );
    }
}


Task.propTypes = {
    task: PropTypes.object.isRequired,
};
