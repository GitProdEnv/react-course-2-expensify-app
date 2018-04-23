import {combineReducers, createStore, applyMiddleware, compose } from "redux";
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import mainFillReducer from '../reducers/mainFillContainer';
import pagesReducer from '../reducers/pages';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer,
            container: mainFillReducer,
            pages: pagesReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
}

