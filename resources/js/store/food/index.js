import axios from "axios";

export default {
    namespaced: true,
    state: {
        foods: [],
        food: '',
        isLoading: false,
        errors: '',
    },
    getters: {
        getFoods: ( state ) => state.foods,

    },
    mutations: {
        setIsLoading( state, isLoading ) {
            state.isLoading = isLoading;
        },
        setError( state, errors) {
            state.errors = errors
        },
        setFoods( state, foods ) {
            state.foods = foods;
        },

    },
    actions: {
        // Getting All foods/dishes
        loadFoods({ commit }) {
            commit("setIsLoading", true);

            return new Promise((resolve, reject) => {
                axios({ url: 'getDishes', method: "POST" })
                    .then((response) => {
                        console.log( response );
                        commit("setIsLoading", false);
                        commit("setFoods", response.data.data);
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
