import axios from 'axios';
export default {
    namespaced: true,
    state: {
        expectPaging: {},

        expectComing: [],

        movieIds: [],
        coming: []
    },
    mutations: {
        appendExpectedComint(state, coming) {
            state.expectComing = [...state.expectComing, ...coming];
        },
        initExpectedComing(state, coming) {
            state.expectComing = coming;
        },
        setExpectPaging(state, paging) {
            state.expectPaging = paging;
        },
        appendComing(state, coming) {
            state.coming = [...state.coming, ...coming];
        },
        setMovieIds(state, movieIds) {
            state.movieIds = movieIds;
        }
    },
    actions: {
        // http://m.maoyan.com/ajax/mostExpected?ci=197&limit=10&offset=0&token=
        async mostExpected({commit, dispatch, state}) {
            let expectComing = state.expectComing;
            let paging = state.expectPaging;
            let offset = expectComing.length;

            let result = await axios.get(`/ajax/mostExpected?ci=197&limit=10&offset=${offset}&token=`);
            if (offset === 0) {
                commit('initExpectedComing', result.data.coming);
            } else {
                commit('appendExpectedComint', result.data.coming);
            }

            commit('setExpectPaging', result.data.paging);
            console.log('expect', result.data)
        },

        // http://m.maoyan.com/ajax/comingList?ci=197&token=&limit=10
        async comingList({commit, dispatch}) {
            let result = await axios.get(`/ajax/comingList?ci=197&token=&limit=10`);
            commit('appendComing', result.data.coming);
            commit('setMovieIds', result.data.movieIds);
        },
        //  http://m.maoyan.com/ajax/moreComingList?ci=197&token=&limit=10&movieIds=1300037%2C1233227%2C1300314%2C1298853%2C1251419%2C1222930%2C1300780%2C368102%2C1301108%2C1250662
        async moreComingList({commit, dispatch, state}) {
            let movieIds = state.movieIds;
            let coming = state.coming;
            let moreId = movieIds.slice(coming.length, coming.length + 10);
            let idstring  = moreId.join(',');

            let result = await axios.get(`/ajax/moreComingList?ci=197&token=&limit=10&movieIds=${encodeURIComponent(idstring)}`);
            commit('appendComing', result.data.coming);
        }
    }
}
