
import {createStore} from 'redux';
import { ActionTypes } from '../components/EventConstants';

const startingBalance = 100;
const initialState = {counter: startingBalance, showCounter: true, showWin: false }

const counterReducer = (state = initialState, action) => {
    if( action.type === ActionTypes.INCREMENT) {
        return {
            ...state,
            counter: state.counter + 1
        }
    }

    if( action.type === ActionTypes.DECREMENT) {
        return {
            ...state,
            counter: state.counter - 1
        }
    }

    if( action.type === ActionTypes.INCREASE_BY_VALUE) {
        return {
            ...state,
            counter: state.counter + action.amount,
        }
    }

    if( action.type === ActionTypes.TWEEN_VALUE_FROM_TO) {
        let fromValue = action.range.split(":")[0];
        let toValue = action.range.split(":")[1];
        return {
            ...state,
            from: state.from + fromValue,
            to: state.to + toValue,
        }
    }


    if( action.type === ActionTypes.DECREASE_BY_VALUE) {
        return {
            ...state,
            counter: state.counter - action.amount
        }
    }
    
    if( action.type === ActionTypes.TOGGLE) {
        return {
            ...state,
            showCounter: !state.showCounter
        }
    }  
    
    if( action.type === ActionTypes.SHOW_CONTROLS) {
        return {
            ...state,
            showCounter: true
        }
    }  

    if( action.type === ActionTypes.HIDE_CONTROLS) {
        return {
            ...state,
            showCounter: false
        }
    }      


    if( action.type === ActionTypes.SHOW_WIN) {
        return {
            ...state,
            showWin: true
        }
    }  

    if( action.type === ActionTypes.HIDE_WIN) {
        return {
            ...state,
            showWin: false
        }
    }      


    return state;
}


const store = createStore(counterReducer);

export default store;