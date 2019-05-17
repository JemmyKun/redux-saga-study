import {
  GET_LIST,
  DELETE_ITEM,
  GET_ACTIVE_STATUS,
  IS_NEED_PWD,
  GET_MOVIE_LIST
} from "../actions/actionTypes";
import { combineReducers } from "redux";

let initData = {
  moveList: [],
  title: "",
  name: "",
  count: 0,
  isActive: false,
  hasLoad: false
};

function meetingInfo(data = initData, action) {
  switch (action.type) {
    case GET_LIST:
      return { ...data, ...action.payload };
    case DELETE_ITEM:
      return Object.assign({}, data, action.payload);
    case GET_ACTIVE_STATUS:
      return { ...data, ...action.payload };
    case IS_NEED_PWD:
      return { ...data, ...action.payload };
    default:
      return data;
  }
}

let initMoveData = {
  list: [],
  count: 0
};

function moveList(data = initMoveData, action) {
  switch (action.type) {
    case GET_MOVIE_LIST:
      return { ...data, ...action.payload };
    default:
      return data;
  }
}

export default combineReducers({
  meetingInfo,
  moveList
});
