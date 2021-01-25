import React from 'react';
import { connect } from 'react-redux';

import CardList from '../../сomponents/CardList';
import { Route, Switch } from 'react-router-dom';
import SignIn from '../SignIn';
import NotFound from '../NotFound';
import CardPage from '../CardPage';
import Settings from '../Settings';

const Home = (props) => {
    return (
        <div>
            {props.isLogin ? (
                <Switch>
                    <Route path="/sing-in" component={SignIn} />
                    <Route path="/home" component={CardList} />
                    <Route path="/card:id" component={CardPage} />
                    {props.isAdmin ? (
                        <Route path="/settings" component={Settings} />
                    ) : null}
                    <Route component={NotFound} />
                </Switch>
            ) : (
                <Switch>
                    <Route path="/sing-in" component={SignIn} />
                </Switch>
            )}
        </div>
    );
};

const mapStateToProps = (state) => {
    return { isLogin: state.isLogin, isAdmin: state.isAdmin };
};

export default connect(mapStateToProps)(Home);
