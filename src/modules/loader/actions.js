import { questionTypes } from './';

const setLoader = (value, name) => ({
  type: questionTypes.SET_LOADER,
  value,
    name,
});

// THIS IS ASYNC ACTION
const createQuestion = (db, document, history) => dispatch => {
    dispatch(setLoader(true, questionTypes.CREATE_QUESTION));
  setTimeout(() => {
    // emulating server work
    db.questions.insert(document);
    history.push('/');
  }, 1000);
    dispatch(setLoader(false, questionTypes.CREATE_QUESTION));
};

export default { setLoader, createQuestion }