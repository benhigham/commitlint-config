# `@benhigham/commitlint-config`

[![npm version](https://img.shields.io/npm/v/@benhigham/commitlint-config.svg)](https://www.npmjs.com/package/@benhigham/commitlint-config)
[![npm downloads](https://img.shields.io/npm/dm/@benhigham/commitlint-config.svg)](https://www.npmjs.com/package/@benhigham/commitlint-config)
[![License](https://img.shields.io/github/license/benhigham/commitlint-config)](LICENSE.md)

My personal [commitlint](https://commitlint.js.org) configuration based on the [Conventional Commits](https://www.conventionalcommits.org/) standard.

## Features

- Based on `@commitlint/config-conventional`
- Provides consistent, structured commit messages
- Integrates with Atom-style changelogs
- Pre-configured formatting rules

## Installation

```bash
# npm
npm install --save-dev @benhigham/commitlint-config

# yarn
yarn add --dev @benhigham/commitlint-config

# pnpm
pnpm add --save-dev @benhigham/commitlint-config
```

## Usage

Use in `commitlint.config.js`:

```js
/** @type {import('@commitlint/types').UserConfig} */
const config = {
  extends: ['@benhigham/commitlint-config'],
  // your overrides here
};

export default config;
```

### With Git Hooks

For the best experience, use with [lefthook](https://github.com/evilmartians/lefthook) or [husky](https://github.com/typicode/husky) to enforce commit message formatting:

#### Example with lefthook

```yaml
# lefthook.yml
commit-msg:
  commands:
    lint-commit:
      run: pnpm exec commitlint --edit {1}
```

#### Example with husky

```bash
# Install husky
npm install --save-dev husky
# Set up the commit-msg hook
npx husky add .husky/commit-msg 'npx commitlint --edit $1'
```

## Commit Message Format

This configuration enforces the [Conventional Commits](https://www.conventionalcommits.org/) format:

```
<type>[(optional scope)]: <description>

[optional body]

[optional footer(s)]
```

### Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `build`: Changes that affect the build system or external dependencies
- `ci`: Changes to CI configuration files and scripts
- `chore`: Other changes that don't modify src or test files
- `revert`: Reverts a previous commit

## Requirements

- Node.js 18.20.x or higher
- [commitlint](https://commitlint.js.org) 19.x

## License

This project is licensed under the [MIT License](LICENSE.md).
