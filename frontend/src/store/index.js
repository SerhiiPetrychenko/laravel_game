import { createStore } from "vuex";

export default createStore({
    state: {
        loading: false,
    },
    mutations: {
        setLoading(state, value = false) {
            state.loading = !!value;
        },
        showLoader(state) {
            state.loading = true;
        },
        hideLoader(state) {
            state.loading = false;
        },
    },
    getters: {
        isLoading(state) {
            return state.loading;
        },
    },
    actions: {},
    modules: {}
});
