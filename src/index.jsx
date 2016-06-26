import React from 'react';
import {render} from 'react-dom';
import Inner from './inner.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.handleCounter = this.handleCounter.bind(this);
    }

    handleCounter () {
        this.setState({count:this.state.count + 1 });
    }

    render () {
        return (
          <div>
            <p> Hello World!  I am {this.props.name}</p>
            <button onClick={this.handleCounter}>Click me</button>
            <Inner now={new Date().toString()} count={this.state.count}/>
          </div>
        );
    }
}

render(<App name="ZHAO Yan" />, document.getElementById('app'));
