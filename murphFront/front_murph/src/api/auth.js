import storage from '../components/Utils/storage';
import client, { configureClient, resetClient  } from './client';

const tokenPath = '/api/token/';

export const login = (credentials, remember) => {

  return client
    .post(`${tokenPath}`, credentials)

    .then(({access, refresh}) => {
      console.log(remember)
      if(remember){
        storage.set('access', access);
        storage.set('refresh', refresh)
      }
      console.log(access, refresh)
      configureClient({access, refresh});
    })
    .catch(error => {
      console.log(error, 'auuu')
      if (error) {
        throw error
      }
      
      // if (error.message === 'Unauthorized') {
      //   throw Error('Invalid credentials');
      // }  else  {
      //   throw Error('Server Error', error);
      // }
    });
};

export const logout = () => {
    return Promise.resolve().then(() => {
        resetClient();
        storage.remove('access');
        storage.remove('refresh');
    }).then(window.location.replace('/'))
};