import React from 'react';

const apiUrl = 'https://test.zoek-de-bron.pindrop.nl/';
const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
};


const checkStatus = (response) => {
    console.warn(JSON.stringify(response))
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        const error = new Error(response.statusText)
        error.response = response;
        throw error;
    }
};

const parseJSON = (response) => response.json();

function getQueryString(params) {
    const esc = encodeURIComponent;
    return Object.keys(params)
        .map(k => esc(k) + '=' + esc(params[k]))
        .join('&');
}

function request(params) {
    const method = params.method || 'GET';
    let qs = '';
    let body;
    const headers = params.headers || headers;

    if (['GET', 'DELETE'].indexOf(method) > -1 && params.data)
        qs = '?' + getQueryString(params.data);
    else // POST or PUT
        body = JSON.stringify(params.data);

    const url = apiUrl + params.path + qs;

    return fetch(url, { method, headers, body })
            .then(checkStatus)
            .then(parseJSON);
}

export default {
    get: (path, data = null, headers = null) => request({path, data, headers, method: 'GET'}),
    post: (path, data = null, headers = null) => request({path, data, headers, method: 'POST'}),
    put: params => request(Object.assign({ method: 'PUT' }, params)),
    delete: params => request(Object.assign({ method: 'DELETE' }, params))
};
