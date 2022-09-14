import { takeEvery, takeLatest, delay, put } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { increment, incrementSaga, incrementSagaSuccess } from "./counterSlice";

// eslint-disable-next-line require-yield
// export function* log(action: PayloadAction<number>) {
//   console.log("log", action);
// }
function* handleIncrementSaga(action: PayloadAction<number>) {
  console.log("dasdassda");
  //wait 2s
  yield delay(2000);
  console.log("waiting done, dispatch action");
  yield put(incrementSagaSuccess(action.payload));
  //dispatch
}
export default function* counterSaga() {
  console.log("counterSaga");
  // muốn lắng nghe tất cả action
  //   yield takeEvery("*", log);
  // muốn lắng nghe từng action
  // yield takeEvery(incrementSaga.toString(), handleIncrementSaga);
  yield takeLatest(incrementSaga.toString(), handleIncrementSaga);
}
