import React from 'react';

import {
    RandomLoader
} from './../Loader';

import {
    ReceipePeoperties
} from '../../Type';


interface RandomReceipes {
    randomReceipes: ReceipePeoperties
}

const Index = (props: RandomReceipes) => {

    //destructur
    const {
        randomReceipes
    } = props

    const randomCard = () => {
        return (
            <div className="border border-teal-400 shadow rounded-md p-1 w-full">
                <div className="flex space-x-4">
                    <div className="rounded bg-teal-400 w-40 aspect-square">
                        <img src={randomReceipes.strMealThumb} className="rounded" />
                    </div>
                    <div className="flex-1 space-y-4 py-1">
                        <div className="text-lg font-bold">{randomReceipes.strMeal}</div>
                        <div className="space-y-3">
                            <div className="grid grid-cols-3 ">
                                <div className="col-span-2">{randomReceipes.strArea}</div>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="grid grid-cols-3 ">
                                <div className="h-2 col-span-2">{randomReceipes.strCategory}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return !randomReceipes.idMeal ?  <RandomLoader /> : randomCard()
}

export default Index
