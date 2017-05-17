import React, { Component } from 'react';
import HelloWorld from './HelloWorld';
import AddGreeter from './AddGreeter';

class HelloWorldList extends Component {
    constructor(props) {
        super(props);
        this.state = {greetings: ['tono', 'santi', 'lusi', 'thomas']};

        this.addGreeting = this.addGreeting.bind(this);
        this.removeGreeting = this.removeGreeting.bind(this);
    }

    addGreeting(newName) {
        this.setState({greetings: [...this.state.greetings, newName]})
    }

    removeGreeting(removedName) {
        const filteredGreetings = this.state.greetings.filter((name) => {
            return name !== removedName;
        });
        this.setState({greetings: filteredGreetings});
    }

    render() {
        const greetings = this.state.greetings.map((name) => {
            return <HelloWorld
                key={name}
                name={name}
                removeGreeting={this.removeGreeting}
            />
        });
        return (
            <div className="HelloWorldList">
                <AddGreeter addGreeting={this.addGreeting} />
                {greetings}
            </div>
        );
    }
}

export default HelloWorldList;