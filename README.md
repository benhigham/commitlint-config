# `@benhigham/commitlint-config`

My personal [commitlint](https://commitlint.js.org) configuration based on the [Conventional Commits](https://www.conventionalcommits.org/) standard.

## Features

- Based on `@commitlint/config-conventional`
- Provides consistent, structured commit messages
- Integrates with Atom-style changelogs
- Pre-configured formatting rules

## Requirements

- [commitlint](https://commitlint.js.org)
- Node.js >= 18.20.0 (with ESM support)

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

Add to your commitlint configuration:

```js
// commitlint.config.js
export default {
  extends: ['@benhigham/commitlint-config'],
};
```

### With Git Hooks

For the best experience, use with [husky](https://github.com/typicode/husky) or [lefthook](https://github.com/evilmartians/lefthook) to enforce commit message formatting:

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

## Development

This project uses:

- [pnpm](https://pnpm.io/) for package management
- [Changesets](https://github.com/changesets/changesets) for versioning and changelogs
- [Lefthook](https://github.com/evilmartians/lefthook) for Git hooks

## License

[MIT](LICENSE.md)
