import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';
import { startAddMainFill } from '../actions/mainFill';

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startAddExpense(expense);
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm
                    onSubmit={this.onSubmit}
                />
                <button onClick={() => this.props.startAddMainFill({ type: 'nav-1' })}>Add a navigation</button>
                <button onClick={() => this.props.startAddMainFill({ type: 'dat-1' })}>Add a body element</button>
                <button onClick={() => this.props.startAddMainFill({ type: 'gal-1' })}>Add a Photo gallery element</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense)),
    startAddMainFill: (container) => dispatch(startAddMainFill(container))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage); // The first would be mapStateToProps