import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense with no expenses given at first', () => {
    const addExpense = {
        id: '109',
        description: 'Laptop',
        note: '',
        amount: 29500,
        createdAt: 20000
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense: addExpense
    };
    const state = expensesReducer(undefined, action);
    expect(state).toEqual([addExpense]);
});

test('should add an expense with expenses given at first', () => {
    const givenExpense = {
        id: '1',
        description: 'Given Expense',
        note: '',
        amount: 111,
        createdAt: 0
    };
    const addExpense = {
        id: '2',
        description: 'Gum',
        note: '',
        amount: 195,
        createdAt: 0
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense: addExpense
    };
    const state = expensesReducer([givenExpense], action); // When filled in this is an array with multiple objects
    expect(state).toEqual([givenExpense, addExpense]);
});

test('should edit an expense', () => {
    const updatedDescription = 'Rent a car to become happy';
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            description: updatedDescription
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].description).toBe(updatedDescription);
});

test('should not edit expense if expense not found', () => {
    const updatedDescription = 'Rent a car to become happy';
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            description: updatedDescription
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});