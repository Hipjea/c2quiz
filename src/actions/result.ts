import { TCategoriesData, TAnswersData } from "../common/types";

export const loadAnswers = () => async (dispatch: any) => {
    let answers, categories = [];
    const storage = localStorage.getItem('c2-answers');
    const cat = localStorage.getItem('c2-categories');

    if (storage != null && cat != null) {
        answers = JSON.parse(storage || "");
        categories = JSON.parse(cat || "");
    }

    const data = {
        'answers': answers,
        'categories': categories
    }

    return dispatch({ type: 'LOAD_ANSWERS', payload: data });
};

export const parseResults = (categories: TCategoriesData, answers: TAnswersData) => async (dispatch: any) => {
    const data = { 
        categories: categories,
        answers: answers
    };

    return dispatch({ type: 'PARSE_RESULTS', payload: data });
};