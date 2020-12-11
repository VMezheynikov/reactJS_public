import React, { useContext } from 'react';
import CardList from '../../сomponents/CardList';
import { CardsContext } from '../../context/CardsContext';
import { Route, Switch } from 'react-router-dom';
import SignIn from '../SignIn/SignIn';
import NotFound from '../NotFound/NotFound';

function Home() {
    const cardContext = useContext(CardsContext);

    return (
        <div>
            <Switch>
                {cardContext.authorized ? (
                    <Route path="/home" component={CardList} />
                ) : (
                    <Route path="/home" component={SignIn} />
                )}
                <Route path="/sing-in" component={SignIn} />
                <Route component={NotFound} />
            </Switch>
        </div>
    );
}

export default Home;
