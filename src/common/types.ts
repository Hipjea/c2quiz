// Top-level state object

export interface TApplicationState {
    settings: any;
    category: any;
    answer: any;
    external: any;
    result: any;
}

export interface TSettingsData {
    sound: boolean;
}

export interface TCategoryData {
    id: number;
    name: string;
    statements: Array<TStatementData>;
}

export interface TCategoriesData {
    lang: string;
    perStep: number;
    currentStep: number;
    maxStep: number;
    categories: Array<TCategoryData>;
    activeCategories: Array<TCategoryData>;
}

export interface TStatementData {
    id: number;
    name: string;
    isAnswered?: boolean;
}

export interface TAnswersData {
    filter?: any;
    answers: Array<TAnswerData>;
}

export interface TAnswerData {
    statement: number;
    answer: number;
}

export interface TExternalData {}

export interface TResultsData {
    results: Array<TResultData>;
}

export interface TResultData {
    category: Array<TResCategoryData>;
}

export interface TResCategoryData {
    name: string;
    subcategories: Array<TResSubcategoryData>;
}

export interface TResSubcategoryData {
    name: string;
    score: number;
}