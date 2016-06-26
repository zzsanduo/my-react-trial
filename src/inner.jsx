import React from 'react';
import {render} from 'react-dom';

class Inner extends React.Component {
    
    render () {
        return <div>
            <p> Count : {this.props.count}</p>
         <p>Now : {this.props.now}</p>
        </div>
    }
}

Inner.propTypes = {
    count: React.PropTypes.number.isRequired,
    now: React.PropTypes.string.isRequired
};

export default Inner;