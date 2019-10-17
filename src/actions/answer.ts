export const addAnswer = (value: number) => async (dispatch: any) => {
    return dispatch({ type: 'ADD_ANSWER', payload: value });
};

export const getAnswers = () => async (dispatch: any) => {
    const storage = localStorage.getItem('c2-answers');
    let answers = [];

    if (storage != null) {
        answers = JSON.parse(storage || "");
    }

    return dispatch({ type: 'GET_ANSWERS', payload: answers });
};