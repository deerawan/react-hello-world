import React, { Component } from 'react';

class AddGreeter extends Component {
    constructor(props) {
        super(props);
        this.state = {greetingName: ''};

        this.handleUpdate = this.handleUpdate.bind(this);
        this.addGreeting = this.addGreeting.bind(this);
    }

    handleUpdate(event) {
        this.setState({greetingName: event.target.value});
    }

    addGreeting() {
        this.props.addGreeting(this.state.greetingName);
        this.setState({greetingName: ''});
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.handleUpdate} value={this.state.greetingName} />
                <button onClick={this.addGreeting}>Add</button>
            </div>
        );
    }
}

export default AddGreeter;