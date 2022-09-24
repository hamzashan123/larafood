import axios from "axios";

export default {
    namespaced: true,
    state: {
        meals: {
            all: [
                {
                    image: 'https://assets.kulina.id/kulina-assets/web/images/menus-new-user/menu_30_03.jpg',
                    name: 'Meal Plan 1',
                    type: "breakfast",
                    price: 2,
                    type: ['Breakfast', 'Lunch', 'Dinner'],
                    days: ['Monday', 'Tuesday', 'Wednesday', 'Wednesday', 'Thursday', 'Friday']
                },
                {
                    image: 'https://assets.kulina.id/kulina-assets/web/images/menus-new-user/menu_30_04.jpg',
                    name: 'Meal Plan 6',
                    type: "breakfast",
                    price: 5,
                    type: ['Breakfast', 'Lunch'],
                    days: ['Monday', 'Tuesday', 'Wednesday']
                },
                {
                    image: 'https://assets.kulina.id/kulina-assets/web/images/menus-new-user/menu_40_01.jpg',
                    name: 'Meal Plan 2',
                    type: "breakfast",
                    price: 3,
                    type: ['Breakfast', 'Snacks', 'Dinner'],
                    days: ['Monday', 'Tuesday', 'Wednesday']
                },
                {
                    image: 'https://assets.kulina.id/kulina-assets/web/images/benefit_01_beragam_pilihan.jpg',
                    name: 'Meal Plan 7',
                    type: "breakfast",
                    price: 3.33,
                    type: ['Breakfast', 'Lunch', 'Dinner'],
                    days: ['Monday', 'Tuesday', 'Wednesday']
                },
                {
                    image: 'https://assets.kulina.id/kulina-assets/web/images/benefit_02_mix_n_match.jpg',
                    name: 'Meal Plan 8',
                    type: "breakfast",
                    price: 2,
                    type: ['Lunch'],
                    days: ['Monday', 'Friday']
                },
                {
                    image: 'https://assets.kulina.id/kulina-assets/web/images/menus-new-user/menu_40_02.jpg',
                    name: 'Meal Plan 3',
                    type: "breakfast",
                    price: 2.5,
                    type: ['Lunch', 'Dinner'],
                    days: ['Monday', 'Tuesday', 'Wednesday', 'Wednesday', 'Thursday', 'Friday']
                },
                {
                    image: 'https://assets.kulina.id/kulina-assets/web/images/menus-new-user/menu_40_04.jpg',
                    name: 'Meal Plan 4',
                    type: "breakfast",
                    price: 5,
                    type: ['Lunch'],
                    days: ['Friday']
                },
                {
                    image: 'https://assets.kulina.id/kulina-assets/web/images/benefit_04.jpg',
                    name: 'Meal Plan 5',
                    type: "breakfast",
                    price: 4.5,
                    type: ['Breakfast', 'Lunch', 'Dinner'],
                    days: ['Friday']
                },
                {
                    image: 'https://assets.kulina.id/kulina-assets/web/images/menus-new-user/menu_30_04.jpg',
                    name: 'Meal Plan 6',
                    type: "breakfast",
                    price: 5,
                    type: ['Lunch', 'Dinner'],
                    days: ['Monday', 'Tuesday', 'Wednesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
                },
                {
                    image: 'https://assets.kulina.id/kulina-assets/web/images/menus-new-user/menu_40_01.jpg',
                    name: 'Meal Plan 2',
                    type: "breakfast",
                    price: 3,
                    type: ['Snacks'],
                    days: ['Saturday', 'Sunday']
                },
                {
                    image: 'https://assets.kulina.id/kulina-assets/web/images/menus-new-user/menu_30_03.jpg',
                    name: 'Meal Plan 1',
                    type: "breakfast",
                    price: 2,
                    type: ['Breakfast', 'Lunch', 'Dinner'],
                    days: ['Monday', 'Tuesday', 'Wednesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
                },
                {
                    image: 'https://assets.kulina.id/kulina-assets/web/images/menus-new-user/menu_30_04.jpg',
                    name: 'Meal Plan 6',
                    type: "breakfast",
                    price: 5,
                    type: ['Breakfast', 'Lunch', 'Snacks', 'Dinner'],
                    days: ['Monday', 'Tuesday', 'Wednesday', 'Wednesday', 'Thursday', 'Friday']
                },
            ],
        },
        thisWeekMeals: [
            {
                image: 'https://assets.kulina.id/kulina-assets/web/images/menus-new-user/menu_30_03.jpg',
                name: 'Monday',
                price: 2,
                type: ['Breakfast', 'Lunch', 'Dinner'],
                day: 'Monday'
            },
            {
                image: 'https://assets.kulina.id/kulina-assets/web/images/menus-new-user/menu_30_04.jpg',
                name: 'Tuesday',
                price: 5,
                type: ['Breakfast', 'Lunch'],
                day: 'Tuesday'
            },
            {
                image: 'https://assets.kulina.id/kulina-assets/web/images/menus-new-user/menu_40_01.jpg',
                name: 'Wednesday',
                price: 3,
                type: ['Breakfast', 'Snacks', 'Dinner'],
                day: 'Wednesday'
            },
            {
                image: 'https://assets.kulina.id/kulina-assets/web/images/benefit_01_beragam_pilihan.jpg',
                name: 'Thursday',
                price: 3.33,
                type: ['Breakfast', 'Lunch', 'Dinner'],
                day: 'Thusrsday'
            },
            {
                image: 'https://assets.kulina.id/kulina-assets/web/images/benefit_02_mix_n_match.jpg',
                name: 'Friday',
                price: 2,
                type: ['Lunch'],
                day: 'Friday'
            },
            {
                image: 'https://assets.kulina.id/kulina-assets/web/images/menus-new-user/menu_40_02.jpg',
                name: 'Saturday',
                price: 2.5,
                type: ['Lunch', 'Dinner'],
                day: 'Saturday'
            },
            {
                image: 'https://assets.kulina.id/kulina-assets/web/images/menus-new-user/menu_40_04.jpg',
                name: 'Sunday',
                price: 5,
                type: ['Lunch', 'Dinner'],
                day: 'Sunday'
            },
          ],
        searchedMeals: [],
        meal: '',
        isLoading: false,
        errors: '',
    },
    getters: {
        getMeals: ( state ) => state.meals,
        getThisWeekMeals: ( state ) => state.thisWeekMeals,
        getSearchedMeals: ( state ) => state.searchedMeals,

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
        // loadMeals({ commit }) {
        //     commit("setIsLoading", true);

        //     return new Promise((resolve, reject) => {
        //         axios({ url: 'getMeals', method: "POST" })
        //             .then((response) => {
        //                 console.log( response );
        //                 commit("setIsLoading", false);
        //                 commit("setMeals", response.data.data);
        //                 return resolve(response.data);
        //             })
        //             .catch((error) => {
        //                 console.log(error);
        //                 commit("setIsLoading", false);
        //                 commit("setError", error);
        //                 return reject(error);
        //             });
        //     });
        // },

        // searchedMeals( {state}, query ) {
        //     let a 
        //     state.meals.all.forEach( meal => {

        //        a = meal.filter( ( m ) => {
        //              console.log(m);
        //              m.toLowerCase().includes(query.value.toLowerCase())
        //          })
        //     });
                

        //     console.log("asdasd" , a);
        // }

    },
};
