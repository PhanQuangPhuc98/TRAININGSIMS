import *as  actionTypes from '../actions/actionTypes';
import initialState from './initialState';
export default function courseReducer(state =initialState.courses , action) {
    switch (action.type) {
        case actionTypes.LOAD_COURSE_SUCCESS:
            return action.course;

        case actionTypes.CREATE_COURSE_SUCCESS:
            return [
                ...state,
                Object.assign({},action.course)
            ];

        case actionTypes.UPDATE_COURSE_SUCCESS:
                return [
                    ...state.filter(course =>course.id!==action.course.id),
                    Object.assign({},action.course)
                ];
            
        default:
            return state;
    }
}