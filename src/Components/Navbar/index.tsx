import React from 'react';

import {
    Link,
    useHistory
} from "react-router-dom";



import {
    useSelector,
    useDispatch
} from 'react-redux'

import { HeartIcon } from '@heroicons/react/solid';

import {
    seacrhReceipesToReducer
} from '../../Action/action';

interface NavbarProps {
    title: string
    favLength: number
}

const Index = (props: NavbarProps) => {

    const history = useHistory();
    const dispatch = useDispatch()

    //Destruct Props
    const {
        title,
        favLength
    } = props;

    const [param, setParam] = React.useState("name");
    const [text, setText] = React.useState('');
    const [showButton, setShowButton] = React.useState(false);

    const search = () => {
        const body = {
            param,
            text
        }
        dispatch(seacrhReceipesToReducer(body))
        setText('')
        history.push('/r')

    }

    return (
        <nav
            className="fixed w-full z-50 flex items-center justify-between flex-row bg-teal-400 py-4 lg:px-80  shadow">
            <div className="flex justify-between hidden lg:block  md:block lg:w-auto w-full 0 pl-6 pr-2  lg:pb-0">
                <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
                    <Link to="/" className="font-semibold text-xl tracking-tight text-white" >YourReceipe.</Link>
                </div>
            </div>

            <div className="flex flex-row w-full lg:block flex-column lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
                {/* <!-- This is an example component --> */}
                <div className="mx-auto text-gray-600 lg:block ">
                    <div className="flex justify-between bg-white h-10 rounded-lg w-full pr-2">
                        <input
                            className="bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none w-full"
                            type="text"
                            name="search"
                            value={text}
                            placeholder={`Seach by ${param}`} 
                            onFocus={() => setShowButton(true)}
                            onBlur={() => setTimeout(() => setShowButton(false), 3000 )}
                            onChange={e => setText(e.target.value)}
                        />
                        {showButton ? 
                        <div onClick={() => search()} className="flex bg-sky-400 p-2 text-white my-1 text-sm rounded px-3 justift-center cursor-pointer">
                            Search
                        </div>
                        :
                        <select
                            onChange={e => setParam(e.target.value)}
                            className="bg-white"
                        >
                            <option value="name">By Name</option>
                            <option value="category">By Category</option>
                            <option value="area">By Area</option>
                        </select>
}
                    </div>
                </div>
                <div onClick={() => favLength < 1 ? alert("You dont have any favorites recipe") : history.push("/r")} className="flex bg-white rounded w-10 h-10 aspect-square mx-2 justify-center items-center cursor-pointer hover:bg-tael-400 ">
                    <div className={`absolute ${ favLength < 1 ? `hidden` : `avLength `} h-5 w-5 rounded-full bg-red-500 text-xs flex justify-center items-center text-white top-2 ml-5 `}>
                        {favLength}
                    </div>
                    <HeartIcon className={`h-6 text-red-500 hover:text-red-500`} />
                </div>
            </div>

        </nav>
    )

}


export default Index;