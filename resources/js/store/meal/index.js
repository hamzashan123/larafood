import axios from "axios";

export default {
    namespaced: true,
    state: {
        meals: [],
        meal: '',
        isLoading: false,
        errors: '',
    },
    getters: {
        getMeals: ( state ) => state.meals,

    },
    mutations: {
        setIsLoading( state, isLoading ) {
            state.isLoading = isLoading;
        },
        setError( state, errors) {
            state.errors = errors
        },
        setMeals( state, meals ) {
            state.meals = meals;
        },

    },
    actions: {
        // Getting All meals/dishes
        loadMeals({ commit }) {
            commit("setIsLoading", true);

            return new Promise((resolve, reject) => {
                axios({ url: 'getMeals', method: "POST" })
                    .then((response) => {
                        console.log( response );
                        commit("setIsLoading", false);
                        commit("setMeals", response.data.data);
                        return resolve(response.data);
                    })
                    .catch((error) => {
                        console.log(error);
                        commit("setIsLoading", false);
                        commit("setError", error);
                        return reject(error);
                    });
            });
        },

    },
};
