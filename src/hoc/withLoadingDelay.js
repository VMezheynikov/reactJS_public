import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const withLoadingDelay = (WrappedComponent, className) => {
    return (props) => {
        const [loaded, setLoaded] = useState(false);
        useEffect(() => {
            setTimeout(() => {
                setLoaded(true);
            }, 2000);
        }, []);
        let returnObj = (
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        );
        if (loaded) {
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
