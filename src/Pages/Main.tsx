import React from 'react';

import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

import {
    useSelector,
    useDispatch
} from 'react-redux';

//Action
import {
    getReceipesFromServer,
    getRandomReceipesFromServer
} from './../Action/action';

//Components
import {
    Card,
    RandomCard
} from './../Components';

const Main = () => {

    const states = useSelector((state: any) => state.ReceipesReducer)
    const dispatch = useDispatch();
    const MINUTE_MS = 180000;

    React.useEffect(() => {
        dispatch(getReceipesFromServer())
    }, [])

    React.useEffect(() => {
        dispatch(getRandomReceipesFromServer())
    }, [])

    React.useEffect(() => {
        console.log(states)
    }, [states.randomReceipe, states.favorites])

    React.useEffect(() => {
        const interval = setInterval(() => { dispatch(getRandomReceipesFromServer()) }, MINUTE_MS);
        return () => clearInterval(interval);
    }, [])

    return (
        <div className="mt-20">
            <RandomCard
                randomReceipes={states.randomReceipe}
            />

            <Card
                recipe={states.receipes}
                extra={''}
            />
        </div>

    )
}

export default Main
