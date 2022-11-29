import React from 'react';
import {
    useSelector,
    useDispatch
} from 'react-redux';

import {
    storeCommentsToReducer,
    storeFavoritesToReducer
} from '../Action/action';


const Detail = () => {

    const states = useSelector((state: any) => state.ReceipesReducer)
    const dispatch = useDispatch()
    const today = new Date();


    React.useEffect(() => {
        console.log(states)
    }, [])

    const [comments, setCommnets] = React.useState({
        date: '',
        text: '',
    })

    const storeComments = (idMeal: string) => {
        const body = {
            idMeal,
            comments
        }
        dispatch(storeCommentsToReducer(body))
        const newComment = { text:'', date: `` }
        setCommnets(newComment)
    }

    return (
        <div className="w-full mt-20">
            <img src={states.details.strMealThumb} className="rounded w-full h-50"/>
            <div className="text-2xl mt-5 font-bold">{states.details.strMeal}</div>
            <div>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300">
                    <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path></svg>
                    {states.details.strArea}
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                    <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path></svg>
                    {states.details.strCategory}
                </span>
            </div>

            <div className="mt-5 mb-2 font-bold">~ Ingredients ~</div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-black dark:text-white">#</th>
                            <th scope="col" className="px-6 py-3 text-black dark:text-white">Ingredient</th>
                            <th scope="col" className="px-6 py-3 text-black dark:text-white">Measure</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[...Array(20)].map((v, i) =>
                            !states.details[`strIngredient${i + 1}`] && !states.details[`strMeasure${i + 1}`] || states.details[`strMeasure${i + 1}`] === " " ? null :
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={i}>
                                    <td className="px-6 py-4 text-black dark:text-white">{i + 1}</td>
                                    <td className="px-6 py-4 text-black dark:text-white">{states.details[`strIngredient${i + 1}`]}</td>
                                    <td className="px-6 py-4 text-black dark:text-white"> {states.details[`strMeasure${i + 1}`]}</td>
                                </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <div className="mt-5 mb-2 font-bold">~ Instruction ~</div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-black dark:text-white">How to make</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4 text-black dark:text-white">{states.details.strInstructions}</td>
                        </tr>

                    </tbody>
                </table>
            </div>

            <div 
            onClick={() => dispatch(storeFavoritesToReducer(states.details))}
                className={`${states.details.favorite ? `bg-red-700` : `bg-teal-700`} px-10 py-2 flex justify-center item-center rounded mt-2 text-white cursor-pointer hover:bg-sky-700`}>
                {states.details.favorite ? "Delete from favorite" : "Add Favorite"}
            </div>

            <div className="mt-5 mb-2 font-bold">~ Comments ~</div>
            <textarea
                id="message"
                onChange={e => {
                    const newComment = { text: e.target.value, date: `${today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()} ${today.getHours()+':'+today.getMinutes()+':'+today.getSeconds()}` }
                    setCommnets(newComment)
                }}
                value={comments.text}
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment...">
            </textarea>
            <div
                onClick={() => storeComments(states.details.idMeal)}
                className="bg-sky-500 px-10 py-2 flex justify-center item-center rounded mt-2 text-white cursor-pointer hover:bg-sky-700">
                Comment
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" colSpan={2} className="px-6 py-3 text-black dark:text-white">Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        {states.details.comments.map((v: any, i: number) =>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={i}>
                                <td className="px-6 py-4 text-black dark:text-white">{v.text}</td>
                                <td className="px-6 py-4 text-black dark:text-white text-right text-xs">{v.date}</td>
                            </tr>
                        ).reverse()}
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default Detail
