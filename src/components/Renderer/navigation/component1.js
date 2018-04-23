import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Draggable, { DraggableCore } from 'react-draggable';

export default class Navigation extends React.Component {
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
            <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                <div>
                    <div className="nav-container">
                        <div>
                            <div className="bar bar--sm visible-xs">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-3 col-md-2">
                                            <a href="#"> <img className="logo logo-dark" alt="logo" src="/images/logo-dark.png" /> <img className="logo logo-light" alt="logo" src="/images/logo-light.png"/> </a>
                                        </div>
                                        <div className="col-9 col-md-10 text-right">
                                            <a href="#" className="hamburger-toggle"/*data-toggle-className="#menu1;hidden-xs hidden-sm"*/> <i className="icon icon--sm stack-interface stack-menu"></i> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <nav id="menu1" className="bar bar-1 hidden-xs">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-1 col-md-2 hidden-xs">
                                            <div className="bar__module">
                                                <a href="#"> <img className="logo logo-dark" alt="logo" src="/images/logo-dark.png" /> <img className="logo logo-light" alt="logo" src="/images/logo-light.png" /> </a>
                                            </div>
                                        </div>
                                        <div className="col-lg-11 col-md-12 text-right text-left-xs text-left-sm">
                                            <div className="bar__module">
                                                <ul className="menu-horizontal text-left">
                                                    <li>
                                                        <a href="#">
                                                            Single Link
                                                        </a>
                                                    </li>
                                                    <li>Next Link</li>
                                                    <li className="dropdown"> <span className="dropdown__trigger">
                                        Dropdown Slim
                                    </span>
                                                        <div className="dropdown__container">
                                                            <div className="container">
                                                                <div className="row">
                                                                    <div className="dropdown__content col-lg-2">
                                                                        <ul className="menu-vertical">
                                                                            <li> <a href="#">Single Link</a> </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="dropdown"> <span className="dropdown__trigger">
                                        Dropdown Wide
                                    </span>
                                                        <div className="dropdown__container">
                                                            <div className="container">
                                                                <div className="row">
                                                                    <div className="dropdown__content row w-100">
                                                                        <div className="col-lg-3">
                                                                            <h5>Menu Title</h5>
                                                                            <ul className="menu-vertical">
                                                                                <li> <a href="#">Single Link</a> </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="col-lg-3">
                                                                            <h5>Menu Title</h5>
                                                                            <ul className="menu-vertical">
                                                                                <li> <a href="#">Single Link</a> </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="col-lg-3">
                                                                            <h5>Menu Title</h5>
                                                                            <ul className="menu-vertical">
                                                                                <li> <a href="#">Single Link</a> </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="col-lg-3">
                                                                            <h5>Menu Title</h5>
                                                                            <ul className="menu-vertical">
                                                                                <li> <a href="#">Single Link</a> </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bar__module">
                                                <a className="btn btn--sm type--uppercase" href="#customise-template"> <span className="btn__text">
                                    Try Builder
                                </span> </a>
                                                <a className="btn btn--sm btn--primary type--uppercase" href="#purchase-template"> <span className="btn__text">
                                    Buy Now
                                </span> </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </Draggable>
        )
    }
};