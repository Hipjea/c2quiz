import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as categoryActions from '../actions/category';

interface IProps {
    changeStep: any;
    currentStep: number;
    maxStep: number;
};

interface IState {
    category: {
        currentStep: number;
        maxStep: number;
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
                { currentStep && currentStep < maxStep
                    ?    <button onClick={() => this.changeStep("up")}
                            className="btn">
                            Suite
                        </button>
                    :   null
                }
            </footer>
        );
    }
}

const mapStateToProps =  (state: IState) => ({
    currentStep: state.category.currentStep,
    maxStep: state.category.maxStep
});

const mapDispatchToProps = (dispatch: any) => ({
    changeStep: (way: string) => dispatch(categoryActions.changeStep(way))
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);