import client from './client';
import storage from '../components/Utils/storage';
import { refreshToken } from './client';
const auth = storage.get('access')
const refresh = storage.get('refresh')
const apiPath = '/api/';

export const getAccountIG =  () => {

    const token = auth;
    const ref = refresh;

    const header = {
        'Authorization' : `Bearer ${token}`, 
    };
    const url = `${apiPath}accountig`;
    return client.get(url, { headers : header  }).catch(function(error) {
        if(error.status === 401){
            refreshToken(ref).then(response => {
                const header = {
                    'Authorization' : `Bearer ${response}`, 
            }; 
        return client.get(url, { headers : header  })
        })  
        }
    })
};

export const getAccountTK = () => {

    const ref = refresh
    const token = auth;
    const header = {
        'Authorization' : `Bearer ${token}`, 
    };
    const url = `${apiPath}accounttk`;
    return client.get(url, { headers : header  } ).catch(function(error) {
        if(error.status === 401){
            refreshToken(ref).then(response => {
                const header = {
                    'Authorization' : `Bearer ${response}`, 
            }; 
        return client.get(url, { headers : header  })
        })  
        }
    })
};
export const getMedia = () => {
    const ref = refresh;
    const token = auth;
    const url = `${apiPath}media`;
    const header = {
        'Authorization' : `Bearer ${token}`, 
    };
    return client.get(url, { headers : header  }).catch(function(error) {
        if(error.status === 401){
            refreshToken(ref).then(response => {
                const header = {
                    'Authorization' : `Bearer ${response}`, 
            }; 
        return client.get(url, { headers : header  })
        })  
        }
    })
};

export const getAccountIgDetail = (id) => {
    const token = auth;
    const ref = refresh;
    const header = {
        'Authorization' : `Bearer ${token}`, 
    };
    const url = `${apiPath}accountig/${id}`;
    return client.get(url, { headers : header  }).catch(function(error) {
        if(error.status === 401){
            refreshToken(ref).then(response => {
                const header = {
                    'Authorization' : `Bearer ${response}`, 
            }; 
        return client.get(url, { headers : header  })
        })  
        }
    });
};
export const getAccountTkDetail = (id) => {
    const token = auth;
    const ref = refresh;
    const header = {
        'Authorization' : `Bearer ${token}`, 
    };
    const url = `${apiPath}accounttk/${id}`;
    return client.get(url, { headers : header  }).catch(function(error) {
        if(error.status === 401){
            refreshToken(ref).then(response => {
                const header = {
                    'Authorization' : `Bearer ${response}`, 
            }; 
        return client.get(url, { headers : header  })
        })  
        }
    });
};

export const getMediaPost = () => {
    const token = auth;
    const ref = refresh;
    const header = {
        'Authorization' : `Bearer ${token}`, 
    };
    const url = `${apiPath}mediapost`;
    return client.get(url, { headers : header  }).catch(function(error) {
        if(error.status === 401){
            refreshToken(ref).then(response => {
                const header = {
                    'Authorization' : `Bearer ${response}`, 
            }; 
        return client.get(url, { headers : header  })
        })  
        }
    });
};
