import { all, fork } from "redux-saga/effects";

import ReceipesSagas from "./receipeSagas";

export default function* rootSaga() {
  yield all([fork(ReceipesSagas)]);
}