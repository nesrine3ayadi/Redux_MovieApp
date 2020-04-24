export const addNewMovie = (payload) => {
    return {
        type: "ADD_MOVIE",
        payload
    }
}

export const removeMovie = (payload) => {
    return {
        type: "REMOVE_MOVIE",
        payload
    }
}

export const editMovie = (payload) => {
    return {
        type: "EDIT_MOVIE",
        payload
    }
}

export const saveMovie = (payload) => {
    return {
        type: "SAVE_MOVIE",
        payload
    }
}
export const searchMovieByRate = (payload) => {
    return {
        type: "SEARCH_MOVIE_BY_RATE",
        payload
    }
}

export const searchMovieByName = (payload) => {
    return {
        type: "SEARCH_MOVIE_BY_NAME",
        payload
    }
}