import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TAnswersData, TSettingsData } from '../common/types';
import * as answerActions from '../actions/answer';

interface IProps {
    statementId: number;
    settings: TSettingsData;
    answers: any;
    addAnswer: any;
}

interface IState {
    settings: {
        sound: boolean;
        perPage: number;
    };
    answer: {
        answers: TAnswersData;
    };
}

interface IRecipeState {
    selected: number;
}

class ScaleRow extends Component<IProps, IRecipeState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            selected: 0
        }
    }

    popSound() {
        const soundEnabled = this.props.settings.sound;
        if (soundEnabled) {
            const audio = new Audio('/audios/notification.m4a');
            audio.play();
            return true;
        }
        return false;
    }

    addAnswer = (value: number) => {
        this.setState({ selected: value });
        if (this.props.addAnswer({ statement: this.props.statementId, answer: value })) {
            this.popSound();
        }
    }

    getClassName = (id: number) => {
        const answers = this.props.answers;
        if (this.state.selected === id) {
            return `scale-cell scale-${id} selected`;
        } else {
            const foundIndex = answers.findIndex((x: any) => x.statement === this.props.statementId);
            if (foundIndex > -1) {
                if (answers[foundIndex].answer === id) {
                    return `scale-cell scale-${id} selected`;
                }
            }
        }
        return `scale-cell scale-${id}`;
    }

    render() {
        return (
            <div className="scale-row">
                <span className={ this.getClassName(1) }
                    onClick={ () => this.addAnswer(1) } >
                    <img src={`emojis/emoji1.svg`} className="emoji" alt="emoji 1" />
                </span>
                <span className={ this.getClassName(2) }
                    onClick={ () => this.addAnswer(2) } >
                    <img src={`emojis/emoji2.svg`} className="emoji" alt="emoji 2" />
                </span>
                <span className={ this.getClassName(3) }
                    onClick={ () => this.addAnswer(3) } >
                    <img src={`emojis/emoji3.svg`} className="emoji" alt="emoji 3" />
                </span>
                <span className={ this.getClassName(4) }
                    onClick={ () => this.addAnswer(4) } >
                    <img src={`emojis/emoji4.svg`} className="emoji" alt="emoji 4" />
                </span>
            </div>
        );
    }
}


const mapStateToProps = (state: IState) => ({
    settings: state.settings,
    answers: state.answer.answers
});

const mapDispatchToProps = (dispatch: any) => ({
    addAnswer: (value: number) => dispatch(answerActions.addAnswer(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(ScaleRow);