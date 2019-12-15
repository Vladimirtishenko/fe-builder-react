import React from 'react';
import { Link } from 'react-router-dom';

class Error extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="">
                    <h1 className="" title="Error 404">
                        Error 404
                    </h1>
                    <Link className="" to="/">
                        Go Home
                    </Link>
                </div>
            </React.Fragment>
        );
    }
}

export default Error;
