import { useState } from 'react';
import initialState from '../initialState';

const useInitalState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = payload => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        });
    };

    // const removeFromCart = payload => {
    //     setState({
    //         ...state,
    //         cart: state.cart.filter(items => items.id !== payload.id)
    //     });
    // };

    const removeFromCart = (payload, indexToRemove) => {
        setState({
            ...state,
            cart: state.cart.filter((_item, indexCurrent) => indexCurrent !== indexToRemove),
        });
    };

    return {
        addToCart,
        removeFromCart,
        state
    };
};

export default useInitalState;