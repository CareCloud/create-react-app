/**
 * Root Epics import all Module Epics in order to combine them and pass them as middleware to the Application store.
 * All Epics names must end with a $.
 * combineEpics({
 *  Epic1$,
 *  Epic2$,
 *  ...
 * })
 *
 */
import { combineEpics } from 'redux-observable';

export default combineEpics();
