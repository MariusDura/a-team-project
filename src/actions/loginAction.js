export const loginAction = ( isLoginTrue) => {
    return {
        type: 'LOGIN',
        payload: isLoginTrue
    };
};