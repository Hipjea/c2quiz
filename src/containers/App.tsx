import React from 'react';
import { Switch, Route, withRouter, RouteComponentProps } from 'react-router-dom';
import Quiz from './Quiz';
import Results from './Results';

class App extends React.Component<RouteComponentProps<any>> {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path="/" component={ Quiz } />
                    <Route exact path="/resultats" component={ Results } />
                </Switch>
            </React.Fragment>
        );
    }
}

export default withRouter(App);