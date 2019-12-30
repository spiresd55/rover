import React, { Component } from 'react';
import CanvasContainer from "./CanvasContainer";
import {delay} from "../../utils/Delay";

class Canvas extends Component {
    constructor(props) {
        super(props);

        //Method Bindings
        this.saveContext = this.saveContext.bind(this);
        this.generateGrid = this.generateGrid.bind(this);
    }

    saveContext(ctx) {
        this.ctx = ctx;
    }

    calculateDistance() {
        const {xBoundary, yBoundary} = this.props;
        this.width = this.ctx.canvas.width;
        this.height = this.ctx.canvas.height;
        this.xDistance = this.width / xBoundary;
        this.yDistance = this.height / yBoundary;
    }

    draw(start, end, color="#000000", width=1) {
        this.ctx.beginPath();
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = width;
        this.ctx.moveTo(start[0], start[1]);
        this.ctx.lineTo(end[0], end[1]);
        this.ctx.restore();
        this.ctx.stroke();
    }

    drawPoint(start, end) {
        this.ctx.strokeStyle = "#000000";
        this.ctx.beginPath();
        this.ctx.arc(start, end, 3, 0, 2 * Math.PI, true);
        this.ctx.fill();
        this.ctx.restore();
        this.ctx.stroke();
    }

    async generateGrid() {
        const {xBoundary, yBoundary} = this.props;
        const {height, width} = this.ctx.canvas;
        this.ctx.strokeStyle = "#000000";
        this.calculateDistance();

        for(let i = 0; i <= xBoundary; i++) {
            window.requestAnimationFrame(
                await delay(10 , this.draw.bind(this,[i * this.xDistance, 0], [i * this.xDistance, width]))
            )
        }

        for(let i = 0; i <= yBoundary; i++) {
            window.requestAnimationFrame(
                await delay(10 , this.draw.bind(this,[0, i * this.yDistance], [height, i * this.yDistance]))
            )
        }

        //Draw the rovers route
        this.drawPath();
    }

    async drawPath() {
        const {coordinates} = this.props;


        coordinates.forEach(async (coordinate, index) => {
            if (index === 0 ) {
               window.requestAnimationFrame(
                   await delay(100, this.drawPoint.bind(this, coordinate[0] * this.xDistance, coordinate[1] * this.yDistance))
               )
            } else {
                window.requestAnimationFrame(
                    await delay(100, this.draw.bind(
                        this,
                        [coordinates[index - 1][0] * this.xDistance, coordinates[index - 1][1] * this.yDistance],
                        [coordinates[index][0] * this.xDistance, coordinates[index][1] * this.yDistance],
                        "#FF0000",
                        3))
                )
            }

            //Draw final dot
            if ((index === coordinates.length - 1)) {
                window.requestAnimationFrame(
                    await delay(100, this.drawPoint.bind(this, coordinate[0] * this.xDistance, coordinate[1] * this.yDistance))
                )
            }
        });

    }

    componentDidMount() {
        //Flip the coordinates
        this.ctx.transform(1, 0, 0, -1, 0, this.ctx.canvas.height);
        this.generateGrid();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if( prevProps.xBoundary !== this.props.xBoundary ||
            prevProps.yBoundary !== this.props.yBoundary ||
            JSON.stringify(prevProps.coordinates) !== JSON.stringify(this.props.coordinates)
        ) {
            //Clear previous canvas
            this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
            this.generateGrid();
        }
    }

    render() {
        return <CanvasContainer contextRef={this.saveContext} />;
    }
}

export default Canvas;