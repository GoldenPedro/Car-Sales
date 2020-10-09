export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const addFeature = (price) => {
    console.log('ACTOIN: ADD_FEATURE', price);
    return {
        type: ADD_FEATURE,
        payload: price
    }
};

export const removeFeature = (price) => {
    console.log('ACTOIN: REMOVE_FEATURE', price);
    return {
        type: REMOVE_FEATURE,
        payload: price
    }
}