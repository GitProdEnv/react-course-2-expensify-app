import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Draggable, { DraggableCore } from 'react-draggable';

export default class Simple extends React.Component {
    state = {
        activeDrags: 0,
        deltaPosition: {
            x: 0, y: 0
        },
        controlledPosition: {
            x: -400, y: 200
        }
    };

    handleDrag = (e, ui) => {
        const {x, y} = this.state.deltaPosition;
        this.setState({
            deltaPosition: {
                x: x + ui.deltaX,
                y: y + ui.deltaY,
            }
        });
    };

    onStart = () => {
        this.setState({activeDrags: ++this.state.activeDrags});
    };

    onStop = () => {
        this.setState({activeDrags: --this.state.activeDrags});
    };

    // For controlled component
    adjustXPos = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const {x, y} = this.state.controlledPosition;
        this.setState({controlledPosition: {x: x - 10, y}});
    };

    adjustYPos = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const {controlledPosition} = this.state;
        const {x, y} = controlledPosition;
        this.setState({controlledPosition: {x, y: y - 10}});
    };

    onControlledDrag = (e, position) => {
        const {x, y} = position;
        this.setState({controlledPosition: {x, y}});
    };

    onControlledDragStop = (e, position) => {
        this.onControlledDrag(e, position);
        this.onStop();
    };

    render() {
        const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
        const {deltaPosition, controlledPosition} = this.state;
        return (
            <div>
                <section className="switchable bg--primary">
                    <div className="container">
                        <div className="row justify-content-between">
                            <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                                <div className="col-lg-5 col-md-7">
                                    <div className="mt--2">
                                        <h1> Streamline your workflow with Stack </h1>
                                        <p className="lead"> Build lean, beautiful websites with a clean and contemporary look to
                                            suit a range of purposes. </p>
                                        <a className="btn btn--primary type--uppercase" href="#customise-template"> <span
                                            className="btn__text">
							Launch The Builder
						</span> </a> <span className="block type--fine-print">or <a href="#">view the demos</a></span>
                                    </div>
                                </div>
                            </Draggable>

                            <div className="col-lg-7 col-md-5 col-12"><Draggable onDrag={this.handleDrag} {...dragHandlers}><img alt="Image" src="/images/device-2.png"/></Draggable></div>

                        </div>
                    </div>
                </section>
            </div>
        )
    }
}