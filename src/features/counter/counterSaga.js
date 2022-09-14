import { takeEvery, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { increment } from "./counterSlice";

// eslint-disable-next-line require-yield
export function* log(action: PayloadAction<number>) {
  console.log("log", action);
}
export default function* counterSaga() {
  console.log("counterSaga");
  // muốn lắng nghe tất cả action
  //   yield takeEvery("*", log);
  // muốn lắng nghe từng action
  yield takeLatest(increment().type, log);
}
