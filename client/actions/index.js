import request from 'superagent'

function recieveColours(colours) {
    return {
        type: 'RECIEVE_COLOURS',
        colours: colours
    }
}

export function fetchColours() {
    return(dispatch) => {
        request.get('/api/v1/colours')
        .then((res) => {
            return res.body
        }).then(colours => {
            dispatch(recieveColours(colours))
        })
    }
}