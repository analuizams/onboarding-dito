import React, { useCallback, useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import Card from '../components/Card';
import Header from '../components/Header'
import { getSurveyAnswers, saveResults } from '../store/actions';

const Home = (props) => {
  const { surveyAnswers, dispatchSurveyAnswers, dispatchSatisfaction } = props;
  const [loaded, setLoaded] = useState(false)

  const satisfaction = useSelector(state => ({
    surveyAnswers: state.surveyData.response,
    satisfaction: state.surveyData.satisfaction,
  }))

  useEffect(() => {
    const getSurveyAnswers = async() => {
      await dispatchSurveyAnswers();
    }
    getSurveyAnswers();
  }, [dispatchSurveyAnswers]);

  const getStoreScore = useCallback((storeId, storeName) => {
    let store = {
      storeId,
      storeName,
      excelente: 0,
      muitoBom: 0,
      razoavel: 0,
      ruim: 0,
      horrivel: 0
    };
    if (satisfaction[storeId]) {
      store = satisfaction[storeId]
    } else {
      surveyAnswers.filter((res) => res.storeId === storeId).forEach(({ score }) => {
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
      satisfaction[storeId] = store
    }
  }, [satisfaction, surveyAnswers]);


  if (surveyAnswers.lenght) {
    surveyAnswers.forEach((result) => getStoreScore(result.storeId, result.storeName))
    dispatchSatisfaction(satisfaction);
    setLoaded(true);
  }

  // useEffect(() => {
  // }, [dispatchSatisfaction, setLoaded, getStoreScore, surveyAnswers])

  return (
    <div>
      <Header />
      { loaded && Object.keys(satisfaction).map(
        (key) => {
        const store = satisfaction[key]
        return <Card key={ store.storeId } store={ store } />
      }
      )}
      { loaded && <Card />}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  dispatchSurveyAnswers: () => dispatch(getSurveyAnswers()),
  dispatchSatisfaction: (satisfaction) => dispatch(saveResults(satisfaction))
});

const mapStateToProps = (state) => ({
  surveyAnswers: state.surveyData.response,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)