import { PayloadAction } from "@reduxjs/toolkit";
import { call, debounce, put, takeLatest } from "redux-saga/effects";
import provinceApi from "../../../api/provinceAPI";
import { ListParams, ListResponse } from "../../../models/common";
import { Province } from "../../../models/province";
import { provinceActions } from "./provinceSlice";

function* fetchProvinceList(action: PayloadAction<ListParams>) {
  try {
    const res: ListResponse<Province> = yield call(
      provinceApi.getAll,
      action.payload
    );
    yield put(provinceActions.fetchProvinceListSuccess(res));
  } catch (error) {
    yield put(provinceActions.fetchProvinceListFailed());
  }
}

function* handleSearchDebounce(action: PayloadAction<ListParams>) {
  yield put(provinceActions.setFilter(action.payload));
}
export function* provinceSaga() {
  yield takeLatest(provinceActions.fetchProvinceList, fetchProvinceList);
  yield debounce(
    500,
    provinceActions.setFilterWithDebounce.type,
    handleSearchDebounce
  );
}
