import expect from 'expect';
import * as  courseActions from './courseActions';
import * as  actionTypes from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

// Test a async action 
describe('Course Actions',()=>{
    describe('createCourseSuccess',()=>{
        it('should creat a CREATE_COURSE_SUCCESS action',()=>{
            //arrange
            const course={id:'clean-code',title:'Clean Code'};
            const expectedAction={
                type:actionTypes.CREATE_COURSE_SUCCESS,
                course:course
            };

            
        //act
        const action = courseActions.createCourseSuccess(course);
        expect(action).toEqual(expectedAction);
        });

    });
});

const middleware =[thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions',()=>{
    afterEach(()=>{
        nock.cleanAll();
    });
    it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses',(done)=>{
            // Here's an example call to nock.
    // nock('http://example.com/')
    //   .get('/courses')
    //   .reply(200, { body: { course: [{ id: 1, firstName: 'Cory', lastName: 'House'}] }});

    const expectedActions = [
        {type: actionTypes.BEGIN_AJAX_CALL},
        {type: actionTypes.LOAD_COURSE_SUCCESS, body: {courses: [{id: 'clean-code', title: 'Clean Code'}]}}
      ];
      const store = mockStore({courses: []}, expectedActions);
      store.dispatch(courseActions.loadCourses()).then(() => {
        const actions = store.getActions();
        expect(actions[0].type).toEqual(actionTypes.BEGIN_AJAX_CALL);
        expect(actions[1].type).toEqual(actionTypes.LOAD_COURSE_SUCCESS);
        done();
      });

    });
});