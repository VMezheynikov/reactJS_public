import React, { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const withLoadingDelay = (WrappedComponent, className) => {
    return (props) => {
        useEffect(() => {
            setTimeout(() => {
                props.afterLoad();
            }, 2000);
        }, []);
        let returnObj = (
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        );
        if (props.loaded) {
            returnObj = <WrappedComponent {...props} />;
        }
        return (
            <div className={className} style={props.cardStyle}>
                {returnObj}
            </div>
        );
    };
};

export default withLoadingDelay;
