export const fetchAPI = async () => {
  try {
    const response = await fetch('https://storage.googleapis.com/dito-questions/survey-responses.json');
    const results = await response.json();
    return results;
  } catch (error) {
    return Error(error);
  }
};

export default fetchAPI;