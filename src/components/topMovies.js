import React from 'react';
import Opis from './opis';
import { connect } from 'react-redux';

import { fetchMovies } from '../actions/actions';

class TopMovies extends React.Component {
    componentDidMount() {
        this.props.fetchMovies();
    }

    render() {
        let fetching = this.props.fetching;
        return (
            <div>
            {fetching? 
                <h1>Loading</h1>
                :
                <div className="row">
                    {this.props.movies.map((film, i) => {
                        return (
                            <div className="col-md-6 col-sm-12" key={i}>
                                <Opis type="film" film={film} />
                            </div>
                        );
                    })}
                </div>
            }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    movies: state.movies,
    fetching: state.fetching,
})

export default connect(mapStateToProps, { fetchMovies })(TopMovies);