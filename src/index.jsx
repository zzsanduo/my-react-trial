import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {

 render () {
    return (
      <div>
        <p> Hello World!  I am {this.props.name}</p>
        <p>Now :{this.props.now}</p>
      </div>
    );
  }
}

render(<App name="ZHAO Yan" now={new Date().toString()}/>, document.getElementById('app'));
