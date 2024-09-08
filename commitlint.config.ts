import { RuleConfigSeverity } from '@commitlint/types';

const config = {
  extends: ['@commitlint/config-conventional'],

  rules: {
    'type-enum': [
      RuleConfigSeverity.Error,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'chore',
        'revert',
        'wip',
      ],
    ],
  },
};
export default config;
