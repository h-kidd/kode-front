// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {BrowserRouter as Router} from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import userReducer from '../reducers/userReducer';

const TestProviders = ({ initState }) => {
  initState ||= {userId: 0,
    username: "",
    firstname: "first",
    lastname: "last",
    socketId: "test",
    isTeacher: false,
    score: 0,
    topic: "",
    difficulty: "",
    questions: [{answer: ["5*2", "2*5"], options: ["5", "/", "4", "*", "2", "+"], question: ["How would you get the output to equal 10", "___=10"]}],
    isMulti: false,
    isResit: false,
    studentId: 0,
    studentFname: "first",
    studentLname: "last"};
  let testReducer = () => userReducer(initState, { type: '@@INIT' })
  const testStore = createStore(testReducer)

  return ({ children }) => (
    <Provider store={testStore}>
      <Router>
        { children }
      </Router>
    </Provider>
  )
}

const renderWithReduxProvider = (ui, options={}) => {
  let TestWrapper = TestProviders(options)
  render(ui, { wrapper: TestWrapper, ...options })
}

global.React = React;
module.exports = renderWithReduxProvider
