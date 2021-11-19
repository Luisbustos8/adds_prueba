import axios from 'axios';

const client = axios.create({
  baseURL: 'http://167.99.41.139',
  headers: {
      'Content-Type': 'application/json',
    },
});

const setAuthorizationHeader = token => {
  client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const removeAuthorizationHeader = () => {
  delete client.defaults.headers.common['Authorization'];
};

export const refreshToken = (refresh) => {
  return new Promise((resolve, reject) => {
    client.post('/api/token/refresh/', {
      refresh: JSON.parse(localStorage.getItem('refresh'))
    }).then((response) => {
      setAuthorizationHeader(response.access,response.refresh)
      return resolve(response.access)
    }).catch((error) => {
      removeAuthorizationHeader()
      return reject(error)
    })
  })
}

client.interceptors.response.use(
  response =>  response.data,
  error => {
    if (error.response.status !== 401) {
      return Promise.reject(error);
    }
    if (!error.response) {
      return Promise.reject({ message: error.message });
    }
    return Promise.reject({
      message: error.response.statusText,
      ...error.response,
    });
  },
);

export const configureClient = ( {access, refresh} ) => {
  if (access, refresh) {
    setAuthorizationHeader(access, refresh);
  }
};

export const resetClient = () => {
  removeAuthorizationHeader();
};

export default client; 