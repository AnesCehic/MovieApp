import React from 'react';
import { instance } from '../axios';

class DetaljiShow extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            info: {},
            trailer: "",
        }
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        instance.get(`tv/${id}?api_key=3411d7f956e8d250799ea7493036ff03&language=en-US`)
            .then(res => {
                this.setState({ info: res.data });
            })
            .catch(err => {
                console.log(err);
            })

        instance.get(`tv/${id}/videos?api_key=3411d7f956e8d250799ea7493036ff03&language=en-US`)
            .then(res => {
                let a = res.data.results;
                let tr = a.find(t => t.name.includes("Trailer"));
                this.setState({ trailer: tr.key })
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return(
            <div className="container">
                <button onClick={() => this.props.history.goBack()}>Back</button>
                <br />
                {this.state.trailer === "" ?
                    <img src={`https://image.tmdb.org/t/p/w500${this.state.info.backdrop_path}`} alt={this.state.info.title} />
                :
                    <iframe src={`https://www.youtube.com/embed/${this.state.trailer}`} ></iframe>
                }
                <h1>{this.state.info.name}</h1>
                <p>{this.state.info.overview}</p>
                <p>Vote average: {this.state.info.vote_average}</p>
                <p>Runtime: {this.state.info.runtime}</p>
                <p>Popularity: {this.state.info.popularity}</p>
            </div>
        );
    }
}

export default DetaljiShow;