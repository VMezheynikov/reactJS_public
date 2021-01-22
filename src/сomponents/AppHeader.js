import React from 'react';
import { connect } from 'react-redux';
import '../containers/App.css';
import { NavLink } from 'react-router-dom';
import { onLogout } from '../store/actions';

const AppHeader = (props) => {
    return (
        <header className="App-header">
            <div>
                <p>Test application.</p>
                <p>Приветствую {props.user}</p>
            </div>
            <div>
                <nav>
                    <ul>
                        {props.isLogin ? (
                            <li>
                                <NavLink to="/home">Home</NavLink>
                                {props.isAdmin ? (
                                    <NavLink to="/settings">Settings</NavLink>
                                ) : null}
                                <NavLink
                                    to={{
                                        pathname: '/sing-in',
                                        hash: '#submit',
                                        search: '?quick-submit=false',
                                    }}
                                    onClick={props.onLogout}>
                                    Выйти
                                </NavLink>
                            </li>
                        ) : (
                            <li>
                                <NavLink
                                    to={{
                                        pathname: '/sing-in',
                                        hash: '#submit',
                                        search: '?quick-submit=false',
                                    }}>
                                    Sing in
                                </NavLink>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

const mapStateToProps = (state) => {
    return {
        isLogin: state.isLogin,
        user: state.username,
        isAdmin: state.isAdmin,
    };
};

const mapDispatchToProps = {
    onLogout,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
