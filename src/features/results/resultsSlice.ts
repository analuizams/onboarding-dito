export type satisfactionProps = {
  storeId: number;
  storeName: string;
  excelente: number;
  muitoBom: number;
  razoavel: number;
  ruim: number;
  horrivel: number;
}

const initialState: Array<satisfactionProps> = []

export function resultsReducer(state = initialState, action: any) {
  switch (action.type) {
    case 'results/getSatisfaction': {
      return action.payload
    }
    default:
      return state
  }
}


// Thunk function
export async function fetchAPI(dispatch: any, _getState: any) {
  const response = await fetch('https://storage.googleapis.com/dito-questions/survey-responses.json')
  const results = await response.json();
  const satisfaction: Array<satisfactionProps> = [];

  const getStoreScore = (id: number, storeName: string) => {
    let store = {
      storeId: id,
      storeName,
      excelente: 0,
      muitoBom: 0,
      razoavel: 0,
      ruim: 0,
      horrivel: 0
    };
    const index = id - 1;
    if (satisfaction[index]) {
      store = satisfaction[index]
    } else {
      results.filter(({ storeId }: { storeId: number }) => storeId === id).forEach(({ score }: { score: number}) => {
        switch(score){
          case 5:
            store.excelente += 1;
            break
          case 4:
            store.muitoBom += 1;
            break
          case 3:
            store.razoavel += 1;
            break
          case 2:
            store.ruim += 1;
            break
          default:
            store.horrivel += 1;
        }
      });
      satisfaction[index] = store
    }
  }

  results.forEach(({ storeId, storeName}: { storeId: number, storeName: string }) => getStoreScore(storeId, storeName))
  dispatch({ type: 'results/getSatisfaction', payload: satisfaction })
}
