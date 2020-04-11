import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

    componentDidMount() {
        const { match: { params: { id }}} = this.props;
        this.props.getMovieDetail(id)
     }

    truncate(str, num) {
        const string = str ? str : ''
        if (string.length <= num) {
          return string
        }
        return string.slice(0, num) + '...'
      }


    render() {
        console.log('this props movie', this.props.movie)
        const { Title, Year, Rated, Plot, Poster, Director, BoxOffice, imdbRating, Genre, Awards } = this.props.movie
        const truncPlot = this.truncate(Plot, 350)
        return (
            <div className="movie-detail">
                <div className="movie-card">
                    <div className="container">
                    <div className="photo-cnt">
                        <div className="details">
                            <div className="title">{Title} <span>{Rated}</span></div> 
                            <div>{Year}</div>
                        </div> 
                    </div>
                    <div className="column">
                        <p>{truncPlot}</p>
                    </div>
                    <div className="container2">
                        <div className="img">
                            <img alt="img" src={Poster}></img>
                        </div>
                        <ul className="mas-info">
                            <li>Director: {Director}</li>
                            <li>BoxOffice: {BoxOffice}</li>
                            <li>imdbRating: {imdbRating}</li>
                            <li>Genre: {Genre}</li>
                            <li>Awards: {Awards}</li>                
                        </ul>
                    </div>
                    </div> 
                </div> 
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        movie: state.movieDetail
      };
}
const mapDispatchToProps = dispatch => {
    return {
        getMovieDetail: (id) => dispatch(getMovieDetail(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Movie);