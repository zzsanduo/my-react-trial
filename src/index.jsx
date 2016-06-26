import React from 'react';
import {render} from 'react-dom';
import Inner from 'Inner';

class App extends React.Component {

 render () {
    return (
      <div>
        <p> Hello World!  I am {this.props.name}</p>
        <Inner now={new Date().toString()} />
      </div>
    );
  }
}

render(<App name="ZHAO Yan" />, document.getElementById('app'));
