import {
    STORE_RECEIPES,
    STORE_FAVORITES,
    STORE_RANDOM_RECEIPES,
    STORE_FAV_AND_COMMENTS,
    STORE_DETAILS,
    STORE_COMMENTS,
    SEACRH_RECEIPES
} from '../Action/actionType';

const INIT_STATE = {
    receipes: [],
    randomReceipe: [],
    favorites: [],
    favAndComments: [],
    details: [],
    result: [],
    params: null,
    isSearch: false
}

export default (state: any, action: any) => {

    if (typeof state === 'undefined') {
        return INIT_STATE
    }

    switch (action.type) {
        case STORE_RECEIPES:
            return {
                ...state,
                receipes: action.payload,
                isSearch: false
            }
        case STORE_FAVORITES:
            const findFav = state.favorites.some((v: any) => v.idMeal === action.payload.idMeal);
            const index = state.favAndComments.findIndex((v: any) => v.idMeal === action.payload.idMeal);
            const newArr = [...state.favAndComments];
            newArr[index].favorite = !newArr[index].favorite
            const newArr2 = state.receipes.map((item: any, i: any) => Object.assign({}, item, newArr[i]))
            return {
                ...state,
                favorites: !findFav ? state.favorites.concat(newArr2[index]) : state.favorites.filter((v:any) => v.idMeal !== action.payload.idMeal) ,
                favAndComments: newArr,
                receipes: newArr2,
                details: newArr2[index],
                params: {
                    seacrhBy : "favorite",
                    text: ''
                }
            }
        case STORE_COMMENTS:
            console.log(action.payload);
            const findIndex = state.favAndComments.findIndex((v: any) => v.idMeal === action.payload.idMeal);
            const newFavComm = [...state.favAndComments];
            newFavComm[findIndex].comments = newFavComm[findIndex].comments.concat(action.payload.comments)
            const newReceipe = state.receipes.map((item: any, i: any) => Object.assign({}, item, newFavComm[i]))
            return {
                ...state,
                favAndComments: newFavComm,
                receipes: newReceipe,
                details: newReceipe[findIndex]
            }

        case SEACRH_RECEIPES:
            const findReceipe = action.payload.param === "category" ?
                state.receipes.filter(({ strCategory }: any) => strCategory.toLowerCase().startsWith(action.payload.text.toLowerCase()))
                : action.payload.param === "area" ? state.receipes.filter(({ strArea }: any) => strArea.toLowerCase().startsWith(action.payload.text.toLowerCase())) : state.receipes.filter(({ strMeal }: any) => strMeal.toLowerCase().startsWith(action.payload.text.toLowerCase()))

            return {
                ...state,
                receipes: findReceipe,
                isSearch: true,
                params: {
                    seacrhBy : action.payload.param,
                    text: action.payload.text
                }
            }
        case STORE_RANDOM_RECEIPES:
            return {
                ...state,
                randomReceipe: action.payload
            }
        case STORE_FAV_AND_COMMENTS:
            return {
                ...state,
                favAndComments: action.payload
            }
        case STORE_DETAILS: {
            return {
                ...state,
                details: action.payload
            }
        }
        default:
            return state;
    }

}