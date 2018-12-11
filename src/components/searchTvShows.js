import React from 'react';
import Opis from './opis';
import { connect } from 'react-redux';
import { searchTvShows } from '../actions/actions';

class SearchTvShows extends React.Component {
    componentDidMount() {
        this.props.searchTvShows(this.props.search);
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
                                <Opis type="serija" film={film} />
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
    searchedItems: state.searchedItems,
    search: state.search,
    fetching: state.fetching,
})

export default connect(mapStateToProps, { searchTvShows })(SearchTvShows);