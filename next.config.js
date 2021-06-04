const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'Rostyslav',
        mongodb_password: 'eZ5X8V5ZmyPE9ic',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'my-site-dev',
      },
    };
  }

  return {
    env: {
      mongodb_username: 'Rostyslav',
      mongodb_password: 'eZ5X8V5ZmyPE9ic',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'my-site',
    },
  };
};