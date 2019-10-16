import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { TAnswersData, TCategoriesData, TResultsData } from '../common/types';
import * as resultActions from '../actions/result';

interface IProps {
  categories: TCategoriesData;
  answers: TAnswersData;
  parseResults: any;
  results: TResultsData[] | any;
};

interface IState {
    category: {
        categories: TCategoriesData;
    },
    answer: {
        answers: TAnswersData;
    },
    result: {
        results: TResultsData;
    }
}

class Results extends Component<IProps> {
    componentDidMount() {
        this.props.parseResults(this.props.categories, this.props.answers)
    }

    printCategory(data: any) {
        console.log(data, data.name);

        if (data) {
            return (
                <React.Fragment key={data.name}>
                    <h4>{ data.name }</h4>
                    <ul>
                        { data.subcategories && data.subcategories.map((s, i) => {
                            return (
                                s.name ? <li key={i}>{ s.name } - { s.score }</li> : null
                            )
                        })}
                    </ul>
                </React.Fragment>
            )
        }
    }

    render() {
        const results = this.props.results;

        return (
            <main>
                <Header />
                <div className="container">
                    <h3>Results</h3>
                    { results && 
                        results.map(r => {
                            return this.printCategory(r.category)
                        })
                    }
                    <Footer />
                </div>
            </main>
        );
    }
}

const mapStateToProps =  (state: IState) => ({
    categories: state.category.categories,
    answers: state.answer.answers,
    results: state.result.results
});

const mapDispatchToProps = (dispatch: any) => ({
    parseResults: (categories: TCategoriesData, answers: TAnswersData) => dispatch(resultActions.parseResults(categories, answers))
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);