import { REQUEST_API, SAVE_RESULTS } from './actionTypes';
import fetchAPI from '../../services/fetchAPI';


export const requestAPI = (payload) => ({
  type: REQUEST_API,
  payload,
});

export const saveResults = (payload) => ({
  type: SAVE_RESULTS,
  payload,
})

export function getSurveyAnswers() {
  return async (dispatch) => {
    const results = await fetchAPI();
    return dispatch(requestAPI(results));
  };
}
