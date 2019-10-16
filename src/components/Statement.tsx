import React, { Component } from 'react';
import { connect } from 'react-redux';
import ScaleRow from './ScaleRow';
import { TStatementData, TAnswersData } from '../common/types';


interface IProps {
    key: number;
    statement: TStatementData;
    getAnswers: any;
    answers: TAnswersData;
}

interface IRecipeState {
    answer: {
        answers: TAnswersData;
    }
}

interface IState {
    isAnswered: boolean;
}

class Statement extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            isAnswered: false
        };
    }

    componentDidMount() {
        const answers = this.props.answers;
        if (answers) {
            this.checkIsAnswered(answers);
        }
    }

    UNSAFE_componentWillReceiveProps(newProps: any) {
        if (newProps.answers) {
            this.checkIsAnswered(newProps.answers);
        }
    }

    checkIsAnswered = (answers: any) => {
        const foundIndex = answers.findIndex((x: any) => x.statement === this.props.statement.id);
        if (foundIndex > -1) {
            this.setState({ isAnswered: true });
        }
    }

    render() {
        return(
            <div className={ this.state.isAnswered ? `statement answered` : `statement` }>
                <div className="statement-text">
                    {this.props.statement.name}
                </div>
                <div className="scale-row-container">
                    <ScaleRow statementId={this.props.statement.id} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: IRecipeState) => ({
    answers: state.answer.answers
});

export default connect(mapStateToProps, null)(Statement);