import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss'; // since we defined test: /\.css$/ in webpack.config.js this works
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';


const store = configureStore();

// store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
// store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }));
// store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));
// store.dispatch(setTextFilter('water'));
//
// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'))
// }, 3000);

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);
const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);
ReactDOM.render((
    <div className="vhc vhq">

        <div className="vld">

        </div>

        <div className="vhb">
            <img alt="Variant HTML Page Builder" src="/images/full-logo.png" />
        </div>

        <div className="vha">
            <a target="_blank" href="http://www.mediumra.re/"><img className="vlb" alt="Variant HTML Page Builder" src="/images/mrare.png" /></a>
            <span>&copy; Copyright 2017 Medium Rare<br />All Rights Reserved</span>
        </div>

        <div className="vjg"></div>
    </div>
), document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
});

