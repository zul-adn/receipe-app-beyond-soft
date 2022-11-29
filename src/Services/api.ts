import {
    GET
} from './config';
import * as url from './urldefine';

export const getReceipes = (payload:any) => GET(url.GET_RECEIPES, payload);
export const getRandomReceipes = (payload:any) => GET(url.GET_RANDOM_RECEIPES, payload);
