import React from 'react';
import {connect} from "react-redux";
import PageNavigationLink from './PageNavigationLink';
import { startAddPage} from "../actions/pages";
import {EditExpensePage} from "./EditExpensePage";
import {startEditExpense, startRemoveExpense} from "../actions/expenses";


class PageNavigation extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.pages.map((page) => <PageNavigationLink key={page.id} {...page} />)
                    }
                </ul>
                <button onClick={ () => {
                    this.props.startAddPage({title: 'A new title'})
                }}>
                    Add a new Link to your site
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        pages: state.pages
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        startAddPage: (data) => dispatch(startAddPage(data)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PageNavigation);