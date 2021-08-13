import *as actionTypes from './actionTypes';
import courseApi from '../api/mockCourseApi';
import { beginAjaxCall,ajaxCallError} from './ajaxStatusActions';
export function loadCoursesSuccess(course) {
    return { type: actionTypes.LOAD_COURSE_SUCCESS, course };
}
export function createCourseSuccess(course){
    // console.log("hello create");
    return { type: actionTypes.CREATE_COURSE_SUCCESS, course };
}
export function updateCourseSuccess(course){
    // console.log("hello update");
    return { type: actionTypes.UPDATE_COURSE_SUCCESS, course };
}
export function loadCourses(){
    return function(dispatch){
        dispatch(beginAjaxCall());
        return courseApi.getAllCourses().then(courses=>{
            dispatch(loadCoursesSuccess(courses));
        }).catch(error=>{
            throw(error);
        });
    };
}
export function saveCourse(course){
    return function(dispatch,getState){
        dispatch(beginAjaxCall());
        return courseApi.saveCourse(course).then(course=>{
            course.id?dispatch(updateCourseSuccess(course)):
            dispatch(createCourseSuccess(course));
        }).catch(error=>{
            // console.log("true");
            dispatch(ajaxCallError(error));
            throw(error);
        });
    };
}
