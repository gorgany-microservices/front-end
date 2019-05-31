const createHeaders = (token) => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json;charset=UTF-8');
    if (token) {
        headers.append('Authorization', `Bearer ${token}`);
    }
    return headers;
};

const createRequest = ({method}) => (
    function request({path, body}) {
        const requestBody = {
            headers: createHeaders(),
            method,
        };

        if (body) {
            requestBody.body = JSON.stringify(body);
        }

        return fetch(path, requestBody).then(body => body.json());
    }
);

const crud = {
    post: createRequest({method: 'POST'}),
    get: createRequest({method: 'GET'}),
    put: createRequest({method: 'PUT'}),
    delete: createRequest({method: 'DELETE'})
};

export default crud;