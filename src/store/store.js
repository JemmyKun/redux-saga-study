import { createStore, applyMiddleware } from "redux";
import reducers from "../reducers/reducers";
import createSagaMiddle from "redux-saga";
import logger from "redux-logger";
import sagas from "../sagas/sagas";
import { getSagaType } from "../utils/sagaType";

const sagaMiddleware = createSagaMiddle();

const middlewares = [logger, sagaMiddleware];
const store = createStore(reducers, applyMiddleware(...middlewares));
const sagaObj = sagaMiddleware.run(sagas);

const initReducerData = store.getState();
console.log("initReducerData:", initReducerData);
console.log("sagaObj:", sagaObj);

const action = (type, payload) => ({ type, payload });
const sagaAction = (type, payload) => ({
  type: getSagaType(type),
  payload
});

const dispatchAction = (type, payload) => store.dispatch({ type, payload });
export { store, sagaObj, action, sagaAction, dispatchAction };
