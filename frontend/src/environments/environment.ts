export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'shiminlei', // the auth0 domain prefix
    audience: 'coffee-shop', // the audience set for the auth0 app
    clientId: '6dYx4EQE3fGuOeBgJhZm42Uv3zgwvDEZ', // the client id generated for the auth0 app
    callbackURL: 'http://localhost:8100', // the base url of the running ionic application. 
  }
};
