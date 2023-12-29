export const MICROSERVICES = Object.freeze({
  SCA: {
    NAME: 'SCA_MICROSERVICE',
    ENDPOINTS: {
      AUTH: {
        PUBLIC_KEY: 'ms_sca.auth.public_key',
        SESSION: 'ms_sca.auth.session',
        REFRESH_TOKEN: 'ms_sca.auth.refresh_token',
        LOGOUT: 'ms_sca.auth.logout',
      },
    },
  },
});
