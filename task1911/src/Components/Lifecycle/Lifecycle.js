import React, { Component } from 'react';

class Lifecycle extends Component {
    constructor(props) {
        super(props);
        debugger;
        console.log('vandhu');
    }
    componentDidMount() {
        debugger;
        console.log('ajith');
    }
    componentWillMount() {
        debugger;
        console.log('ranju');
    }
    render() {
        return (
            <div>
                <h1>hai,hello how r you</h1>
                <h1>yaa,i'm fyn</h1>
            </div>
        );
    }
}

export default Lifecycle;