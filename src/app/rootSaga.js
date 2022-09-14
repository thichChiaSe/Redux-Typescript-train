import { all } from "redux-saga/effects";
import counterSaga from "../features/counter/counterSaga";
function* hello() {
  console.log("hello");
}
export default function* rootSaga() {
  console.log("saga");
  yield all([hello(), counterSaga()]);
}
