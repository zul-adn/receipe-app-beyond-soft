import {
    GET_RECEIPES,
    STORE_RECEIPES,
    STORE_RANDOM_RECEIPES,
    GET_RANDOM_RECEIPES,
    STORE_FAV_AND_COMMENTS,
    STORE_FAVORITES,
    STORE_DETAILS,
    STORE_COMMENTS,
    SEACRH_RECEIPES
} from './actionType';

export interface getReceipes {
    type: typeof GET_RECEIPES
}

export interface getRandomReceipes {
    type: typeof GET_RANDOM_RECEIPES
}

export interface storeReceipes {
    type: typeof STORE_RECEIPES
    payload: any
}

export interface storeRandomReceipes {
    type: typeof STORE_RANDOM_RECEIPES
    payload: any
}

export interface storeFavAndComments {
    type: typeof STORE_FAV_AND_COMMENTS
    payload: any
}

export interface storeFavorites {
    type: typeof STORE_FAVORITES
    payload: any
}

export interface storeDetails {
    type: typeof STORE_DETAILS
    payload: any
}

export interface storeComments {
    type: typeof STORE_COMMENTS
    payload: any
}

export interface searchReceipes {
    type: typeof SEACRH_RECEIPES
    payload: any
}   

