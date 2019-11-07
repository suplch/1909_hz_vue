import axios from 'axios';
export default {
    namespaced: true,
    state: {
        detailMovie: {}
    },
    mutations: {
        setDetailMovie(state, detail) {
            state.detailMovie = detail;
        }
    },
    actions: {
        // http://m.maoyan.com/ajax/detailmovie?movieId=1218029

        async detailmovie({commit}, movieId) {
            let result = await axios.get('/ajax/detailmovie?movieId=' + movieId);
            commit('setDetailMovie', result.data.detailMovie)
            console.log(result.data);
        }
    }
}
