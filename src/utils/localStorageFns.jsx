// Data to be stored in localStorage needs to be in 'string' format.
export const setInLocalStorage = (name, data) => {
    return localStorage.setItem(name, JSON.stringify(data));
}

export const getFromLocalStorage = (name) => {
    return localStorage.getItem(name);
}

export const getParsedFromLocalStorage = (name) => JSON.parse(localStorage.getItem(name));

export const removeFromLocalStorage = (name) => {
    return localStorage.removeItem(name);
}