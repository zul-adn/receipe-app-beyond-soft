import React from 'react';
import {
    Route,
    NavLink,
    HashRouter,
    Link,
    useHistory
} from "react-router-dom";

import {
    CardLoader
} from '../Loader';

import {
    useDispatch
} from 'react-redux'

import {
    ReceipePeoperties
} from '../../Type';

import {
    storeFavoritesToReducer,
    storeDetailsToReducer,
    seacrhReceipesToReducer
} from '../../Action/action';

import { HeartIcon } from '@heroicons/react/solid';

interface CardProps {
    recipe: ReceipePeoperties[],
    extra?: string
}

const Index = (props: CardProps) => {
    const history = useHistory()
    const dispatch = useDispatch()

    const {
        recipe,
        extra
    } = props

    const search = (param :any, text:string) => {
     
        const body = {
            param,
            text
        }
        dispatch(seacrhReceipesToReducer(body))
        history.push('/r')
    }

    const receipesList = () => {
        return (
            recipe.map((v, i) =>
                <div key={i} className="border border-teal-400 shadow rounded-md p-1 w-full mx-auto cursor-pointer hover:bg-teal-200">
                    <div className={`absolute  ${extra !== '' ? `hidden` : `` } flex bg-white rounded-full w-10 aspect-square mx-2 my-2 justify-center items-center`}>
                        <HeartIcon className={`h-8 ${v.favorite ? `text-red-500` : `text-gray-400`} hover:text-red-500`} onClick={() => dispatch(storeFavoritesToReducer(v))} />
                    </div>
                    <div className="flex flex-col ">
                        <div className="rounded bg-teal-400 aspect-square w-full">
                            <img src={v.strMealThumb} className="rounded" />
                        </div>
                        <div className="flex-1 py-2 px-2">
                            <Link to="/detail" onClick={() => dispatch(storeDetailsToReducer(v))} className="text-lg font-bold text-lg truncate">{v.strMeal}</Link>
                            <div className="text-sm truncate">{v.strTags}</div>
                            <div className="space-y-1 mt-3">
                                <span onClick={() => { extra === '' ? search("area", v.strArea) : console.log(null)}} className={`bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300`}>
                                    <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
                                    {v.strArea}
                                </span>
                                <span onClick={() => { extra === '' ? search("category", v.strCategory) : console.log(null) }} className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                                    <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
                                    {v.strCategory}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        )
    }

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-8 gap-4 mt-10">
            {!recipe.length ?
                [...Array(12)].map((v, i) =>
                    <div key={i}>
                        <CardLoader />
                    </div>
                )
                : receipesList()
            }
        </div>
    )
}

export default Index;
