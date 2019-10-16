import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TAnswersData, TAnswerData } from '../common/types';

interface IProps {
    answers: TAnswersData;
}

interface IRecipeState {
    answer: {
        answers: TAnswersData;
    }
}

interface IState {
    score: {
        one: number;
        two: number;
        three: number;
        four: number;
    }
}

class ScoreBar extends Component<IProps, IState> {
    private emoji1: React.RefObject<HTMLInputElement>;
    private emoji2: React.RefObject<HTMLInputElement>;
    private emoji3: React.RefObject<HTMLInputElement>;
    private emoji4: React.RefObject<HTMLInputElement>;

    constructor(props: IProps) {
        super(props);
        this.state = {
            score: {
                one: 0,
                two: 0,
                three: 0,
                four: 0
            }
        };
        this.emoji1 = React.createRef();
        this.emoji2 = React.createRef();
        this.emoji3 = React.createRef();
        this.emoji4 = React.createRef();
    }

    UNSAFE_componentWillReceiveProps(newProps: any) {
        if (newProps.answers) {
            this.parseAnswers(newProps.answers);
        }
    }

    parseAnswers = (answers: TAnswersData) => {
        const score = this.state.score;
        const oneAnswers = answers.filter((answer: TAnswerData) => { return answer.answer === 1; });
        const twoAnswers = answers.filter((answer: TAnswerData) => { return answer.answer === 2; });
        const threeAnswers = answers.filter((answer: TAnswerData) => { return answer.answer === 3; });
        const fourAnswers = answers.filter((answer: TAnswerData) => { return answer.answer === 4; });
        
        this.animateEmoji(oneAnswers, score.one, this.emoji1.current);
        this.animateEmoji(twoAnswers, score.two, this.emoji2.current);
        this.animateEmoji(threeAnswers, score.three, this.emoji3.current);
        this.animateEmoji(fourAnswers, score.four, this.emoji4.current);

        this.setState({
            score: {
                one: oneAnswers.length,
                two: twoAnswers.length,
                three: threeAnswers.length,
                four: fourAnswers.length
            }
        });
    }

    animateEmoji(answers: Array<TAnswersData>, score: number, element: HTMLInputElement | null) {
        const newScore = answers.length;
        if (element) {
            if (newScore > score) {
                const img = element.children[0];
                img.classList.add('wobble');
                setTimeout(function() {
                    img.classList.remove('wobble');
                }, 1000);
            }
        }
    }

    render() {
        return(
            <div className="score-bar">
                <span className="score-item">
                    <span ref={this.emoji1}>
                        <img src={`emojis/emoji1.svg`} className="emoji" alt="emoji 1" />
                    </span>
                    <span className={`badge badge-${ this.state.score.one }`}>
                        { this.state.score.one }
                    </span>
                </span>
                <span className="score-item">
                    <span ref={this.emoji2}>
                        <img src={`emojis/emoji2.svg`} className="emoji" alt="emoji 2" />
                    </span>
                    <span className={`badge badge-${ this.state.score.two}`}>
                        { this.state.score.two }
                    </span>
                </span>
                <span className="score-item">
                    <span ref={this.emoji3}>
                        <img src={`emojis/emoji3.svg`} className="emoji" alt="emoji 3" />
                    </span>
                    <span className={`badge badge-${ this.state.score.three }`}>
                        { this.state.score.three }
                    </span>
                </span>
                <span className="score-item">
                    <span ref={this.emoji4}>
                        <img src={`emojis/emoji4.svg`} className="emoji" alt="emoji 4" />
                    </span>
                    <span className={`badge badge-${ this.state.score.four }`}>
                        { this.state.score.four }
                    </span>
                </span>
            </div>
        );
    }
}

const mapStateToProps = (state: IRecipeState) => ({
    answers: state.answer.answers
});

const mapDispatchToProps = (dispatch: any) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ScoreBar);