let nextSongId = 0
export const addSong = (artist, title, duration) => {
    return {
        type: 'ADD_SONG',
        id: nextSongId++,
        artist,
        title,
        duration,
        timeAdded: Date.now()
        // thumbnail
    }
}

export const removeSong = (id) => {
    return {
        type: 'REMOVE_SONG',
        id
    }
}

export const sendToTop = (id) => {
    return {
        type: 'SEND_TO_TOP',
        id
    }
}

export const bumpUp = (id) => {
    return {
        type: 'BUMP_UP',
        id
    }
}

export const sendDown = (id) => {
    return {
        type: 'SEND_DOWN',
        id
    }
}
