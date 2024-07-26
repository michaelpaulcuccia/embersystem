'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    sassOptions: {
      extension: 'scss',
      includePaths: ['app/components'],
    },
    'ember-google-fonts': {
      fonts: ['Nunito:400,700', 'Dancing Script:400,700'],
      subsets: ['latin'], // Optionally specify subsets
    },
  });

  return app.toTree();
};
