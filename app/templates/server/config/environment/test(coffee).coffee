'use strict'

# Test specific configuration
# ===========================

# MongoDB connection options
module.exports =
  mongo:
    uri: 'mongodb://localhost/<%= lodash.slugify(appname) %>-test'
