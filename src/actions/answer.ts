export const addAnswer = (value: number) => async (dispatch: any) => {
    return dispatch({ type: 'ADD_ANSWER', payload: value });
};

export const getAnswers = () => async (dispatch: any) => {
    return dispatch({ type: 'GET_ANSWERS' });
};