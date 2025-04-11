/** @import { UserConfig } from '@commitlint/types' */

/** @type {UserConfig} */
const config = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: 'conventional-changelog-atom',
  formatter: '@commitlint/format',
  rules: {
    'body-max-line-length': [0, 'always', 100],
  },
};

export default config;
