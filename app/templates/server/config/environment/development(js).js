'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/<%= lodash.slugify(appname) %>-dev'
  },

  seedDB: true
};
