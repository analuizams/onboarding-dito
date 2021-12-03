import { REQUEST_API,
  SAVE_RESULTS } from '../actions/actionTypes';

const INITIAL_STATE = {
  response: [],
  satisfaction: {},
};

const surveyData = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_API:
      return ({...state,
        response: action.payload,
      });
      case SAVE_RESULTS:
    return ({ ...state,
    satisfaction: action.payload})
  default:
    return state;
  }
};

export default surveyData;
