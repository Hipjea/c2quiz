// Top-level state object

export interface TApplicationState {
    settings: any;
    category: any;
    answer: any;
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