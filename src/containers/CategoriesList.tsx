import React, { Component } from 'react';
import Category from '../components/Category.jsx';
import { TCategoryData } from '../common/types';
import { connect } from 'react-redux';
import * as categoryActions from '../actions/category';

interface IProps {
    currentStep: number;
    activeCategories?: Array<TCategoryData>;
    category?: TCategoryData;
    fetchCategories: any;
}
  
interface IState {
    category: {
        currentStep: number;
        activeCategories: Array<TCategoryData>;
    };
}

class CategoriesList extends Component<IProps, IState> {
    componentDidMount() {
        this.props.fetchCategories('en');
    }

    printCategory = (category: TCategoryData, i: number) => {
        return (
            <Category key={category.id} category={category} />
        )
    }

    render() {
        return(
            <div>
                <h2 className="title mb-5">Categories</h2>
                { this.props.activeCategories &&
                    this.props.activeCategories.map((category, i) => {
                        return( this.printCategory(category, i) )
                    })
                }
            </div>   
        );
    }
}

const mapStateToProps = (state: IState) => ({
    activeCategories: state.category.activeCategories,
    currentStep: state.category.currentStep
});

const mapDispatchToProps = (dispatch: any) => ({
    fetchCategories: (lang: string) => dispatch(categoryActions.fetchCategories(lang))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList);