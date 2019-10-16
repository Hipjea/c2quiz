import { TCategoriesData, TAnswersData } from "../common/types";

export const parseResults = (categories: TCategoriesData, answers: TAnswersData) => async (dispatch: any) => {
    const data = { 
        categories: categories,
        answers: answers
    };
    return dispatch({ type: 'PARSE_RESULTS', payload: data });
};