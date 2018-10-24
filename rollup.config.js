import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import nodeResolve from 'rollup-plugin-node-resolve';
import { argv } from 'yargs';

const format = argv.format || argv.f || 'iife';
const compress = argv.uglify;

const babelOptions = {
  exclude: 'node_modules/**',
  presets: [
    ['env', { modules: false }],
    "omi"
  ],
  "plugins": [
    "transform-class-properties",
    "transform-decorators-legacy",
    "transform-object-rest-spread"
  ],
  babelrc: false
};

const dest = {
  amd: `dist/amd/omi-i18n${compress ? '.min' : ''}.js`,
  umd: `dist/umd/omi-i18n${compress ? '.min' : ''}.js`,
  iife: `dist/iife/omi-i18n${compress ? '.min' : ''}.js`
}[format];

export default {
  entry: 'src/index.js',
  format,
  plugins: [
    babel(babelOptions),
    nodeResolve({ jsnext: true })
  ].concat(compress ? uglify() : []),
  external: ['omi'],
  moduleName: 'omiI18n',
  //moduleId: 'i18nextXHRBackend',
  dest
};