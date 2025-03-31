/** @import { UserConfig } from '@commitlint/types' */

/** @type {UserConfig} */
const config = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: 'conventional-changelog-atom',
  formatter: '@commitlint/format',
};

export default config;
