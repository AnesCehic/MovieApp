import React from 'react';
import Opis from './opis';
import { connect } from 'react-redux';

import { searchMovies } from '../actions/actions';

class SearchMovies extends React.Component {
    componentDidMount() {
        console.log("mounted");
        this.props.searchMovies(this.props.search);
    }
    
    render() {
        let fetching = this.props.fetching;
        return (
            <div>
            {fetching ?
                <h1>Loading</h1>
                :
                <div className="row">
                    {this.props.searchedItems.map((film, i) => {
                        return(
                            <div className="col-md-6 col-sm-12" key={i}>
                                <Opis type="film" film={film} />
                            </div>
                        )
                    })}
                </div>
            }
            </div>
        );

    }
}

const mapStateToProps = state => ({
    search: state.search,
    searchedItems: state.searchedItems,
    fetching: state.fetching,
})

export default connect(mapStateToProps, { searchMovies })(SearchMovies);