let env = process.env;

export const environmentVariables = {
  env: env.NODE_ENV,
  API_URL: env.REACT_APP_API_URL,
  PUBLIC_URL: env.PUBLIC_URL,
};
