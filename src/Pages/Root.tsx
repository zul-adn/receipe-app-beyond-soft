import React from 'react';

import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

import MainPage from './Main';
import DetailPage from './Detail';
import ResultPage from './Result';

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
    Navbar,
    Card,
    RandomCard
} from './../Components';

const Main = () => {

    const states = useSelector((state: any) => state.ReceipesReducer)

    return (
        <HashRouter>
            <div className="h-screen">
                <Navbar
                    title={`Receipes App`}
                    favLength={states.favorites.length}
                />
                <div className="p-4 lg:px-80">
                    <Route exact path="/" component={MainPage} />
                    <Route path="/detail" component={DetailPage} />
                    <Route path="/r" component={ResultPage} />
                </div>
            </div>
        </HashRouter>
    )
}

export default Main
