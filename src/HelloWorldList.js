import React, { Component } from 'react';
import HelloWorld from './HelloWorld';

class HelloWorldList extends Component {
    constructor(props) {
        super(props);
        this.state = {greetings: ['tono', 'santi', 'lusi', 'thomas']};
    }
    render() {
        const greetings = this.state.greetings.map((name) => {
            return <HelloWorld key={name} name={name} />
        });
        return (
            <div className="HelloWorldList">
                {greetings}
            </div>
        );
    }
}

export default HelloWorldList;