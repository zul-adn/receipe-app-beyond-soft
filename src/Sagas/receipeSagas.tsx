import { call, put, takeLatest, all, select } from 'redux-saga/effects';

import {
    GET_RECEIPES,
    GET_RANDOM_RECEIPES,
    STORE_FAVORITES
} from '../Action/actionType';

import {
    storeReceipesToReducer,
    storeRandomReceipesToReducer,
    storeFavAndCommentsToReducer
} from '../Action/action';

import * as API from '../Services/api';

interface FavComments {
    idMeal: string,
    favorite: boolean,
    comments: string[]
}

function* workerGetReceipes(action: any): any {
    try {
        let favAndCommnets: FavComments[] = []
        let mergeFav = []
        const states = yield select((state: any) => state.ReceipesReducer)
        const reqAPI = yield call(API.getReceipes, action.payload);
        // const store = (v:any) =>  yield put(storeFavAndCommentsToReducer(v))
        if (reqAPI.status === 200) {
            if (!states.favAndComments.length) {
                reqAPI.data.meals.forEach((v: any) => {
                    favAndCommnets.push({
                        "idMeal": v.idMeal,
                        "favorite": false,
                        "comments": []
                    })
                });
                mergeFav = reqAPI.data.meals.map((item:any, i:any) => Object.assign({}, item, favAndCommnets[i]))
                yield put(storeFavAndCommentsToReducer(favAndCommnets))
            }else{ 
                mergeFav = reqAPI.data.meals.map((item:any, i:any) => Object.assign({}, item, states.favAndComments[i]))
            }
            yield put(storeReceipesToReducer(mergeFav))
        }
    } catch (error) {

    }
}

function* workerGetRandomReceipes(action: any): any {
    try {
        const reqAPI = yield call(API.getRandomReceipes, action.payload);
        if (reqAPI.status === 200) {
            yield put(storeRandomReceipesToReducer(reqAPI.data.meals[0]))
        }
    } catch (error) {

    }
}

function* workerStoreToFavorites(action: any): any {
    try {
        console.log(action.payload)
        // if (reqAPI.status === 200) {
        //     yield put(storeRandomReceipesToReducer(reqAPI.data.meals[0]))
        // }
    } catch (error) {

    }
}


function* watcherAllWorker() {
    yield takeLatest(GET_RECEIPES, workerGetReceipes);
    yield takeLatest(GET_RANDOM_RECEIPES, workerGetRandomReceipes);
    // yield takeLatest(STORE_FAVORITES, workerStoreToFavorites)
}

export default watcherAllWorker;