import React from "react";

let initialState =  [];;
let a  = localStorage.getItem('fav_films') ? JSON.parse(localStorage.getItem('fav_films')) : [];

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":

            initialState.push(action.payload)
            return <div>
                {initialState.map((message, index) => (
                    <li key={index}>{message.message}</li>
                ))}
            </div>  ;
        case "DECREMENT":
            initialState = initialState.filter(item => item.film.ID !== action.payload)

            return <div>
                {initialState.map((message, index) => (
                    <li key={index}>{message.message}</li>
                ))}
            </div>;

        case "GET":
            initialState = localStorage.getItem('noti_data') ? JSON.parse(localStorage.getItem('noti_data')) : [];

            return <div>
                {initialState.map((message, index) => (
                    <li key={index}>{message.message}</li>
                ))}
            </div>;
            // return <div>
            //     {initialState.map((message, index) => (
            //         <li key={index}>{message.message}</li>
            //     ))}
            // </div>;
        // case "RESET":
        //     return { ...state, count: 0 };
        default:
            return state;
    }
};

export default counterReducer;
