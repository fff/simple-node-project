var _ = require('lodash');

module.exports = function() {
  return {
      hello: function() {
        return "HELLO";
      },

      trim: function(word){
        return _.trim(word);
      }
  }
};
