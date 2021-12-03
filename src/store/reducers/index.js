import { combineReducers } from 'redux';
import surveyData from './surveyDataReducer';

const rootReducer = combineReducers({ surveyData })

export default rootReducer;