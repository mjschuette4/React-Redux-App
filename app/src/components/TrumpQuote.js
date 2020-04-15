import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { fetchQuote } from '../store/actions/quoteActions';

const TrumpQuote = props => {
    useEffect(() => {
        props.fetchQuote();
    }, [])

    return (
        <div>
            <h1>Beautiful Quotes</h1>
            {props.isFetching && (<Loader 
                type="Puff" 
                color="#00BFFF" 
                height={100} 
                width={100}/>)}
            {props.quote && <h3>"{props.quote}"</h3>}
            <button onClick={props.fetchQuote}>Fetch a new quote</button>
        </div>
    );
};

const mapStateToProps = state => {
    return{
        quote: state.quotes.quote,
        isFetching: state.quotes.isFetching
    };
};

export default connect(
    mapStateToProps,
    { fetchQuote }
)(TrumpQuote);