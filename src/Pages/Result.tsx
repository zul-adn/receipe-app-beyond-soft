import React from 'react';
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

const Result = () => {

    const states = useSelector((state: any) => state.ReceipesReducer)

    return (
        <div className="mt-20">
            <span className="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300">
                <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
                {states.params.seacrhBy}
            </span>
            <span className={`bg-blue-100 ${states.params.seacrhBy === "favorite" ? `hidden` : ``} text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800`}>
                <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
                {states.params.seacrhBy === "favorite" ? "" : states.params.text}
            </span>
            <Card
                recipe={states.params.seacrhBy === "favorite" ? states.favorites : states.receipes} 
                extra={states.params}
            />
        </div>
    )
}

export default Result;
