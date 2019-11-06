import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

import Coming from './coming';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        noMovies: false,
        movieIds: [],
        movies: []
    },
    getters: {

    },
    mutations: {
        initMovies(state, movies) {
            state.movies = movies;
        },
        addMovies(state, movies) {
            if (movies.length === 0) {
                state.noMovies = true;
                return;
            }
            state.movies = [...state.movies, ...movies]
        },
        initMovieIds(state, movieIds) {
            state.movieIds = movieIds;
        },
    },
    actions: {
        movieOnInfoList({commit, dispatch}) {
            return axios.get('/ajax/movieOnInfoList?token=').then((result) => {
                console.log(result);
                commit('initMovies', result.data.movieList);
                commit('initMovieIds', result.data.movieIds)
            })
        },
        async moreComingList({commit, state}) {
            let movieIds = state.movieIds;
            let movies = state.movies;

            let nextMovieIds = movieIds.slice(movies.length, movies.length + 10)
            let nextIdsString = nextMovieIds.join(',');

            let result = await axios.get('/ajax/moreComingList?token=&movieIds=' + encodeURIComponent(nextIdsString));
            console.log(result.data.coming);
            commit('addMovies', result.data.coming)
            // return axios.get('/ajax/moreComingList?token=&movieIds=' + encodeURIComponent(nextIdsString)).then((result) => {
            //
            // })
        }
    },
    modules: {
        coming: Coming
    }
});
