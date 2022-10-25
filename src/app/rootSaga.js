import { all } from "redux-saga/effects";
import counterSaga from "../features/counter/counterSaga";
import { provinceSaga } from "../features/counter/province/provinceSaga";

export default function* rootSaga() {
  yield all([provinceSaga()]);
}
