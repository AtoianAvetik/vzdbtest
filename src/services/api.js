import React from 'react';

const url = 'https://test.zoek-de-bron.pindrop.nl/';
const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
};


const checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        const error = new Error(response.statusText)
        error.response = response;
        throw error;
    }
};

function setGetParams(paramsObject){
    return {headers: headers, body: JSON.stringify({paramsObject})};
}

const parseJSON = (response) => response.json();

export const get = (path, params?) => {
    const options = params ? setGetParams(params) : headers;

    return fetch(url + path, {options})
            .then(checkStatus)
            .then(parseJSON)
};

export const post = (path, data) => (
    fetch(url + path, {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
    })
        .then(checkStatus)
        .then(parseJSON)
);
