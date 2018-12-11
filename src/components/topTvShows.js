import React from 'react';
import Opis from './opis';
import { connect } from 'react-redux';

import { fetchTvShows } from '../actions/actions';

class TopTvShows extends React.Component {
    componentDidMount() {
        this.props.fetchTvShows();
    }
    
    render() {
        let fetching = this.props.fetching;
        return (
            <div>
            {fetching ?
                <h1>Loading</h1>
                :
                <div className="row">
                    {this.props.tvShows.map((film, i) => {
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
    tvShows: state.tvShows,
    fetching: state.fetching,
})

export default connect(mapStateToProps, { fetchTvShows })(TopTvShows);