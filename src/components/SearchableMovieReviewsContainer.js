import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'r8G3d5baAGIwVgCGfZ2DTpAqkBTs8ut5';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviews extends React.Component {

    constructor(){
        super();
        this.state= {
            reviews:[],
            searchTerm:[]
        }
    }

    componentDidMount(){
        this.fetchMovies()
    }

    fetchMovies(){
        fetch (URL)
        .then ((res) => res.json())
        .then ((res) => {
            this.setState({
                reviews:res
            })
        })
    }

    handleChange = (e) => {
        this.setState({
            searchTerm:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const reviewList=this.state.reviews
        console.log(reviewList)
    }

    render(){
        return(
            <div className='searchable-movie-reviews'>
                <form className='findMovie' onSubmit={e => this.handleSubmit(e)}>
                    <input onChange={e => this.handleChange(e)}>
                    </input>
                    <button>Submit</button>
                </form>
            </div>
        )
    }

} export default SearchableMovieReviews
