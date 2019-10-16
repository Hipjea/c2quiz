import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as categoryActions from '../actions/category';
import { TAnswersData, TCategoriesData } from '../common/types';
import { NavLink } from 'react-router-dom';

interface IProps {
    changeStep: any;
    currentStep: number;
    maxStep: number;

    categories: TCategoriesData;
    answers: TAnswersData;
};

interface IState {
    category: {
        currentStep: number;
        maxStep: number;
        categories: TCategoriesData;
    },
    answer: {
        answers: TAnswersData;
    }
}

class Footer extends Component<IProps> {
    changeStep(way: string) {
        this.props.changeStep(way);
    }

    render() {
        const { currentStep, maxStep } = this.props;
        return (
            <footer>
                { currentStep && currentStep > 1
                    ?   <button onClick={() => this.changeStep("down")}
                            className="btn">
                            Retour
                        </button>
                    :   null
                }
                <span className="separator">&nbsp;</span>
                { currentStep && currentStep < maxStep
                    ?    <button onClick={() => this.changeStep("up")}
                            className="btn">
                            Suite
                        </button>
                    :   null
                }
                <span className="separator">&nbsp;</span>
                <span className="btn">
                    <NavLink to='/resultats'>Résultats</NavLink>
                </span>
            </footer>
        );
    }
}

const mapStateToProps =  (state: IState) => ({
    currentStep: state.category.currentStep,
    maxStep: state.category.maxStep,

    categories: state.category.categories,
    answers: state.answer.answers
});

const mapDispatchToProps = (dispatch: any) => ({
    changeStep: (way: string) => dispatch(categoryActions.changeStep(way)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);