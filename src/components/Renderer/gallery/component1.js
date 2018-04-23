import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Draggable, { DraggableCore } from 'react-draggable';
import { Resizable } from 'react-resizable';



export default class Gallery extends React.Component {
    state = {
        activeDrags: 0,
        deltaPosition: {
            x: 0, y: 0
        },
        // controlledPosition: {
        //     y: 200
        // },
        width: 800,
        height: 800,
        showMe: false
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

    onResize = (event, {element, size}) => {
        this.setState({width: size.width, height: size.height});
    };

    showTextBorder = () => {
        this.setState({
            showMe: true
        });
    };


    render() {
        const styles = {
            container: {
                borderRadius: 4,
                borderWidth: 0.5,
                borderColor: '#d6d7da',
                margin: '80px',
            },
            title: {
                fontSize: 19,
                fontWeight: 'bold',
            },
            activeTitle: {
                color: 'red',
                fontSize: '80px'
            }
        };

        const dragHandlers = {onStart: this.onStart, onStop: this.onStop, cancel: '.masonry__container, .react-resizable-handle'};
        const {deltaPosition, controlledPosition} = this.state;
        return (<div>
            <DraggableCore
                onDrag={this.handleDrag}
                {...dragHandlers}
            >
                <section
                    className="box"
                    style={{/*left: deltaPosition.x + 'px', */top: deltaPosition.y + 'px', ...styles.container, border: this.state.showMe ? ('1px solid blue') : 'none'}}
                    onMouseEnter={this.showTextBorder}
                >

                    <Resizable className="box" height={this.state.height} width={this.state.width} onResize={this.onResize}>
                    <div className="container" style={{width: this.state.width + 'px', height: this.state.height + 'px', overflow: 'hidden'}}>
                        <div className="masonry">
                            <div className="masonry-filter-container text-center row justify-content-center align-items-center"> <span>Category:</span>
                                <div className="masonry-filter-holder">
                                    <div className="masonry__filters" data-filter-all-text="All Categories">
                                        <ul>
                                            <li className="active" data-masonry-filter="*">All Categories</li>
                                            <li data-masonry-filter="people">People</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="masonry__container row masonry--active">
                                <div className="masonry__item col-lg-4 col-6 filter-people" data-masonry-filter="People">
                                    <a href="/images/work-6.jpg" data-lightbox="Gallery 1"> <img alt="Image" src="/images/work-6.jpg" /> </a>
                                </div>
                                <div className="masonry__item col-lg-4 col-6 filter-people" data-masonry-filter="People">
                                    <a href="/images/work-3.jpg" data-lightbox="Gallery 1"> <img alt="Image" src="/images/work-3.jpg" /> </a>
                                </div>
                                <div className="masonry__item col-lg-4 col-6 filter-people" data-masonry-filter="People">
                                    <a href="/images/work-3.jpg" data-lightbox="Gallery 1"> <img alt="Image" src="/images/work-6.jpg" /> </a>
                                </div>
                                <div className="masonry__item col-lg-4 col-6 filter-people" data-masonry-filter="People">
                                    <a href="/images/work-3.jpg" data-lightbox="Gallery 1"> <img alt="Image" src="/images/work-3.jpg" /> </a>
                                </div>
                                <div className="masonry__item col-lg-4 col-6 filter-people" data-masonry-filter="People">
                                    <a href="/images/work-3.jpg" data-lightbox="Gallery 1"> <img alt="Image" src="/images/landing-16.jpg" /> </a>
                                </div>
                                <div className="masonry__item col-lg-4 col-6 filter-people" data-masonry-filter="People">
                                    <a href="/images/work-3.jpg" data-lightbox="Gallery 1"> <img alt="Image" src="/images/landing-16.jpg" /> </a>
                                </div>
                                <div className="masonry__item col-lg-4 col-6 filter-people" data-masonry-filter="People">
                                    <a href="/images/work-3.jpg" data-lightbox="Gallery 1"> <img alt="Image" src="/images/work-3.jpg" /> </a>
                                </div>
                                <div className="masonry__item col-lg-4 col-6 filter-people" data-masonry-filter="People">
                                    <a href="/images/work-3.jpg" data-lightbox="Gallery 1"> <img alt="Image" src="/images/landing-18.jpg" /> </a>
                                </div>
                                <div className="masonry__item col-lg-4 col-6 filter-people" data-masonry-filter="People">
                                    <a href="/images/work-3.jpg" data-lightbox="Gallery 1"> <img alt="Image" src="/images/landing-18.jpg" /> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Resizable>
                </section>
            </DraggableCore>
            </div>
        );
    }
}