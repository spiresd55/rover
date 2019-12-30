import React, { Component } from 'react';
import './canvas.scss';

class CanvasContainer extends Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <canvas
                className="grid"
                height={500}
                width={500}
                ref={node =>
                    node ? this.props.contextRef(node.getContext('2d')) : null
                }
            />
        )
    }
}

export default CanvasContainer;