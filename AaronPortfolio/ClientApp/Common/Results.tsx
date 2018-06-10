import * as React from 'react';
import { connect } from 'react-redux';


class Result extends React.Component{
    render() {
        return (
            <p id="results" className="search-results">
                Some Results
            </p>
        );
    }
};

export default Result;