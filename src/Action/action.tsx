import { 
    GET_RECEIPES,
    GET_RANDOM_RECEIPES,
    STORE_RECEIPES,
    STORE_RANDOM_RECEIPES,
    STORE_FAVORITES,
    STORE_FAV_AND_COMMENTS,
    STORE_DETAILS,
    STORE_COMMENTS,
    SEACRH_RECEIPES
} from './actionType';

import {
    getReceipes,
    getRandomReceipes,
    storeReceipes,
    storeRandomReceipes,
    storeFavAndComments,
    storeFavorites,
    storeDetails,
    storeComments, 
    searchReceipes
} from './type';

type getReceipesType = () => getReceipes;
type getRandomReceipesType = () => getRandomReceipes;
type storeReceipesType = (payload:any) => storeReceipes;
type storeRandomReceipesType = (payload:any) => storeRandomReceipes;
type storeFavAndCommentsType = (payload:any) => storeFavAndComments;
type storeFavoritesType = (payload:any) => storeFavorites;
type storeDetailsType = (payload:any) => storeDetails;
type storeCommentsType = (payload:any) => storeComments;
type seachReceipesType = (payload:any) => searchReceipes;

export const getReceipesFromServer: getReceipesType = () => {
    return {
        type: GET_RECEIPES
    }
}

export const getRandomReceipesFromServer: getRandomReceipesType = () => {
    return {
        type: GET_RANDOM_RECEIPES
    }
}

export const storeReceipesToReducer: storeReceipesType = (payload: any) => {
    return {
        type: STORE_RECEIPES,
        payload
    }
}

export const storeRandomReceipesToReducer: storeRandomReceipesType = (payload:any) => {
    return {
        type: STORE_RANDOM_RECEIPES,
        payload
    }
}

export const storeFavAndCommentsToReducer: storeFavAndCommentsType = (payload:any) => {
    return {
        type: STORE_FAV_AND_COMMENTS,
        payload
    }
}

export const storeFavoritesToReducer: storeFavoritesType = (payload:any) => {
    return {
        type: STORE_FAVORITES,
        payload
    }
}

export const storeDetailsToReducer: storeDetailsType = (payload:any) => {
    return {
        type: STORE_DETAILS,
        payload
    }
}

export const storeCommentsToReducer: storeCommentsType = (payload:any) => {
    return {
        type: STORE_COMMENTS,
        payload
    }
}

export const seacrhReceipesToReducer: seachReceipesType = (payload:any) => {
    return {
        type: SEACRH_RECEIPES,
        payload
    }
}