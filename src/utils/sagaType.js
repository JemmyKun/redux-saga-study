const sagaPrefixer = "WATCH_SAGA_";
const getSagaType = type => `${sagaPrefixer}${type}`;
const getReducerType = type => type.replace(sagaPrefixer, "");

export { sagaPrefixer, getSagaType, getReducerType };
