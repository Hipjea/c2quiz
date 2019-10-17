import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import PolarChart from '../components/PolarChart';
import { NavLink } from 'react-router-dom';
import { TAnswersData, TCategoriesData, TResultsData } from '../common/types';
import * as resultActions from '../actions/result';

interface IProps {
  categories: TCategoriesData;
  answers: TAnswersData;
  loadAnswers: any;
  parseResults: any;
  results: TResultsData[] | any;
  loadedAnswers: TAnswersData | any;
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
        answers: TAnswersData;
    }
}

class Results extends Component<IProps> {
    componentDidMount() {
        this.props.loadAnswers();
        this.props.parseResults(this.props.categories, this.props.answers);
    }

    printCategory(data: any) {
        if (data) {
            return (
                <div key={data.name} className="results-container">
                    <h4>{ data.name }</h4>
                    <div className="result-container">
                        <div className="data-container">
                            <ul className="data-list">
                                { data.subcategories && data.subcategories.map((s, i) => {
                                    return (
                                        s.name 
                                            ?   <li key={i}>
                                                    <span className="name">{ s.name }</span>
                                                    <span className="score">{ s.score }<span className="percent">%</span></span>
                                                </li> 
                                            : null
                                    )
                                })}
                            </ul>
                        </div>

                        <div className="chart-container">
                            <PolarChart data={ data.subcategories } />
                        </div>
                    </div>
                </div>
            )
        }
    }

    render() {
        const results = this.props.results;

        return (
            <main>
                <Header />
                <div className="container results">
                    <h3>Résultats</h3>
                    { results && 
                        results.map(r => {
                            return this.printCategory(r.category)
                        })
                    }
                                    
                    <footer>
                        <span className="btn">
                            <NavLink to='/'>Accueil</NavLink>
                        </span>
                    </footer>
                </div>
            </main>
        );
    }
}

const mapStateToProps =  (state: IState) => ({
    categories: state.category.categories,
    answers: state.answer.answers,
    results: state.result.results,
    loadedAnswers: state.result.answers
});

const mapDispatchToProps = (dispatch: any) => ({
    loadAnswers: () => dispatch(resultActions.loadAnswers()),
    parseResults: (categories: TCategoriesData, answers: TAnswersData) => dispatch(resultActions.parseResults(categories, answers))
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);