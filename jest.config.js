const sass = require('node-sass');


module.exports = {
    transform: {
      '^.+\\.js$': 'babel-jest',
      '^.+\\.svelte$': 
        [
          'jest-transform-svelte',
          {
            preprocess: {
              style: ({ content, attributes }) => {
                if (attributes.type !== 'text/scss') return;
                return new Promise((fulfil, reject) => {
                  sass.render({
                    data: content,
                    includePaths: ['src'],
                    sourceMap: true,
                    outFile: 'x' // this is necessary, but is ignored
                  }, (err, result) => {
                    if (err) return reject(err);
        
                    fulfil({
                      code: result.css.toString(),
                      map: result.map.toString()
                    });
                  });
                });
              }
            }        
          }
        ]
    },
    moduleFileExtensions: ['js', 'svelte'],
    bail: false,
    verbose: false
  };