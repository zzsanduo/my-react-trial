import React from 'react';
import {render} from 'react-dom';

class Inner extends React.Component {
    render () {
        return <div>
         <p>Now :{this.props.now}</p>
        </div>
    }
}

Inner.propTypes = {
    now: React.PropTypes.string.isRequired
};

export default Inner;