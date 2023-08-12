const INCREMENT = (data) => (dispatch) => {
    console.log(data, 'data')
    dispatch({ type: "INCREMENT", payload: data });
};

const DECREMENT = (data) => (dispatch) => {
    dispatch({ type: "DECREMENT", payload: data });
};

const GET = () => (dispatch) => {
    dispatch({ type: "GET", payload: null });
};

export { INCREMENT, DECREMENT, GET };
