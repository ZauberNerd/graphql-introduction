import http from 'http';
import { graphql } from 'graphql';

import schema from './schema';


const executeQuery = (query) => graphql(schema, query);

const parseBody = (request) => new Promise((resolve, reject) => {
    let body = '';

    request
        .on('data', (data) => body += data)
        .on('end', () => resolve(body))
        .on('error', reject);
});

const reply = (response, status, body) => {
    response.writeHead(status, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(body));
};


http.createServer((request, response) => {
    if (request.method !== 'POST') {
        return reply(response, 400, 'Bad Request');
    }

    parseBody(request)
        .then(executeQuery)
        .then((result) => reply(response, 200, result))
        .catch((error) => reply(response, 400, error));

}).listen(1337);

console.log('graphql server listening on http://localhost:1337');
