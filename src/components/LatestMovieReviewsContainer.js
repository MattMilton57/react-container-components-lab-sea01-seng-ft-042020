import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'r8G3d5baAGIwVgCGfZ2DTpAqkBTs8ut5';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends React.Component {

    constructor(){
        super();
        this.state= {
            reviews:[]
        }
    }

    componentDidMount(){
        this.fetchMovies()
    }

    // fetchMovies(){
    //     fetch (URL)
    //     .then ((res) => res.json())
    //     .then ((res) => {
    //         this.setState({
    //             reviews:res
    //         })
    //     })
    // }

    fetchMovies(){
        fetch (URL)
        .then ((res) => res.json())
        .then ((res) => {
            this.setState({
                reviews:res.results
            })
        })
    }
    
    render(){
        return(
            <div className='latest-movie-reviews'>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }

} 

export default LatestMovieReviewsContainer