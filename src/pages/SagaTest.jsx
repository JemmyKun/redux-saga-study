import React from 'react';
import {
    GET_LIST,
    GET_ACTIVE_STATUS,
    IS_NEED_PWD
} from "../actions/actionTypes";
import { getSagaType } from "../utils/sagaType";
import { connect } from 'react-redux';

const SagaTest = (props) => {
    const { dispatch, meetingInfo } = props;
    console.log('meetingInfo:', meetingInfo);
    return (
        <ul>
            <li><button onClick={() => {
                let type = getSagaType(GET_LIST);
                dispatch({ type });
            }}>GET_LIST</button></li>
            <li><button onClick={() => {
                let type = getSagaType(GET_ACTIVE_STATUS);
                dispatch({ type });
            }}>GET_ACTIVE_STATUS</button></li>
            <li><button onClick={() => {
                let type = getSagaType(IS_NEED_PWD);
                dispatch({
                    type, data: {
                        id: 1111, type: 0
                    }
                });
            }}>IS_NEED_PWD</button></li>
        </ul>
    )
}

const mapStateToProps = (state, ownProps) => ({
    meetingInfo: state.meetingInfo
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    dispatch: active => dispatch(active)
})

export default connect(mapStateToProps, mapDispatchToProps)(SagaTest);