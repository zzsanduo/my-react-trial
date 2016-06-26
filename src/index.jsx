import React from 'react';
import {render} from 'react-dom';

var App = React.createClass({
    render: function(){
        return (
          <div>
            <p> Hello World!!!!</p>
          </div>
        );
    }
});


render(<App/>, document.getElementById('app'));
