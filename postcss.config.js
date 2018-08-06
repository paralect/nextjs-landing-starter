const { join } = require('path');

const postcssImport = require('postcss-import');
const postcssPresetEnv = require('postcss-preset-env');
const postcssNested = require('postcss-nested');
const postcssNormalize = require('postcss-normalize');

const cssnano = require('cssnano');

module.exports = {
  plugins: [
    postcssImport({
      root: join(__dirname, 'src/client'),
      path: ['styles'],
    }),
    postcssNested,
    postcssNormalize(),
    postcssPresetEnv({
      stage: 2,
      features: {
        'custom-media-queries': true,
        'custom-properties': {
          appendVariables: false,
          preserve: false, // use true when will be fixed bug with duplicate root variables
        },
      },
    }),
    cssnano({
      zindex: false,
    }),
  ],
};
