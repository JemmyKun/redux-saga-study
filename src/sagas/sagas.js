import {
  GET_LIST,
  GET_ACTIVE_STATUS,
  IS_NEED_PWD
} from "../actions/actionTypes";
import { takeEvery, put, call, all } from "redux-saga/effects";
import axios from "axios";
import { getSagaType, getReducerType } from "../utils/sagaType";

const meetingInfo =
  "/api/aaa";
const isNeedPwd = "/api/bbb";
const getStatus =
  "/api/ccc";

function* checkPwd(action) {
  let _action = action;
  console.log("saga-action", action);
  try {
    let res = yield call(() =>
      axios.post(isNeedPwd, { meetingId: "348029583107072" })
    );
    console.log("isneedPwd:", _action, res);
    let type = getReducerType(_action.type);
    let action = {
      type,
      payload: res.data.biz
    };
    yield put(action);
  } catch (err) {
    console.log(err);
  }
}

function* getList(action) {
  let _action = action;
  console.log("saga-action", action);
  try {
    let res = yield call(() =>
      axios.post(meetingInfo, {
        id: "348029583107072",
        key: "9FBC3090D096F72139259DCED192F982"
      })
    );
    let type = getReducerType(_action.type);
    let action = {
      type,
      payload: res.data
    };
    yield put(action);
  } catch (err) {
    console.log(err);
  }
}

function* getStaus(action) {
  let _action = action;
  console.log("saga-action", action);
  try {
    let res = yield call(() => axios.get(getStatus));
    let type = getReducerType(_action.type);
    let action = {
      type,
      payload: res.data
    };
    yield put(action);
  } catch (err) {
    console.log(err);
  }
}

function* meetingSagas() {
  yield takeEvery(getSagaType(IS_NEED_PWD), checkPwd);
  yield takeEvery(getSagaType(GET_LIST), getList);
  yield takeEvery(getSagaType(GET_ACTIVE_STATUS), getStaus);
}

export default function* sagas() {
  yield all([meetingSagas()]);
}
