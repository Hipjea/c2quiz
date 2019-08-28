import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Settings from '../components/Settings';
import ScoreBar from '../components/ScoreBar';
import CategoriesList from './CategoriesList';

class App extends Component {
    render() {
        return (
            <main>
                <Header />
                <div className="container">
                    <Settings />
                    <ScoreBar />
                    <CategoriesList />
                    <Footer />
                </div>
            </main>
        );
    }
}

export default App;