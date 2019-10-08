import config from "../config";

let orderNow = (email) => {

    let options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({to: email})
    };

    return fetch(config.apiUrl + '/email/newOrder', options)
        .then(response => response.json())
};

export default {
    orderNow
};
