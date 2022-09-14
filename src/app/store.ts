import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    // redux-thunk
    // getDefaultMiddleware(),
    //   {
    //   thunk: true,
    //   serializableCheck: false, //check state toàn bộ tree nếu phát hiện không chuyển hóa được (func, symbol, promise,...) báo lỗi
    //   immutableCheck: false,
    // }

    //add redux-saga vào tool-kit
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
