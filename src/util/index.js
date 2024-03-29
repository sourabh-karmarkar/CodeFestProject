export const createReducer = (initialState, reducerMap) => (
    state = initialState,
    action = {}
) => {
    const reducer = reducerMap[action.type];

    return reducer ? reducer(state, action.payload) : state;
};
