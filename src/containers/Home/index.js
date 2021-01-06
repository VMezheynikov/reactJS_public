import React from 'react';
import CardList from '../../сomponents/CardList';
import { Route, Switch } from 'react-router-dom';
import SignIn from '../SignIn';
import NotFound from '../NotFound';
import CardPage from '../CardPage';

const Home = () => {
    return (
        <div>
            <Switch>
                <Route path="/sing-in" component={SignIn} />
                <Route path="/home" component={CardList} />
                <Route path="/card:id" component={CardPage} />
                <Route component={NotFound} />
            </Switch>
        </div>
    );
};

export default Home;
