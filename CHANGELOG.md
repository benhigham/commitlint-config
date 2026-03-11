# @benhigham/commitlint-config

## 1.0.0

### Major Changes

- [#52](https://github.com/benhigham/commitlint-config/pull/52) [`90c34dd`](https://github.com/benhigham/commitlint-config/commit/90c34ddaf3870a03f5e498a6d3fcf7242488133c) Thanks [@benhigham](https://github.com/benhigham)! - - Drop support for Node.js 18 and 20 — minimum version is now 22
  - Node 18 reached EOL April 2025; Node 20 EOLs April 2026

- [#53](https://github.com/benhigham/commitlint-config/pull/53) [`71c5c6d`](https://github.com/benhigham/commitlint-config/commit/71c5c6d2667e63ab44e1fc2962344ac40cdc3ddc) Thanks [@benhigham](https://github.com/benhigham)! - - Bump `@commitlint/config-conventional` and `@commitlint/format` from v19 to v20
  - Bump `@commitlint/cli` peer dependency from `>=19.0.0` to `>=20.0.0`
  - Update all dependencies to latest versions

### Patch Changes

- [#43](https://github.com/benhigham/commitlint-config/pull/43) [`70f3ac9`](https://github.com/benhigham/commitlint-config/commit/70f3ac9d64c97fed24b6f0c7567161f7c5aee1f6) Thanks [@benhigham](https://github.com/benhigham)! - fix: remove atom parser preset incompatible with commitlint v20

  `parserPreset: 'conventional-changelog-atom'` configured the commit
  parser to match Atom-style headers (`:emoji: description`), not
  conventional commits. This was a latent bug that had no visible effect
  in commitlint v19 due to fallback behaviour in the old parser.

  In commitlint v20, `conventional-commits-parser` was upgraded from
  v5 to v6 (which uses a new `CommitParser` class with no fallback). The
  atom preset's header pattern never matches conventional commit messages,
  causing `type` and `subject` to always be empty — breaking all linting.

  The `extends: ['@commitlint/config-conventional']` preset already
  provides the correct parser configuration. The atom preset and its
  `conventional-changelog-atom` dependency are removed.

## 0.2.0

### Minor Changes

- [`3ce1d7a`](https://github.com/benhigham/commitlint-config/commit/3ce1d7a7df38c9d50722fe85fc5d351ad7b374fe) - Bump `@commitlint/config-conventional` and `@commitlint/format` from v19 to v20

## 0.1.3

### Patch Changes

- [`2536cdf`](https://github.com/benhigham/commitlint-config/commit/2536cdfbdc6b5c0cc878f85159fa9277f6abcef7) Thanks [@benhigham](https://github.com/benhigham)! - Bump dependencies

## 0.1.2

### Patch Changes

- [`e49c480`](https://github.com/benhigham/commitlint-config/commit/e49c480b659a99366ec24e4bfb812edb520034a7) Thanks [@benhigham](https://github.com/benhigham)! - Disable body-max-line-length rule

## 0.1.1

### Patch Changes

- [#2](https://github.com/benhigham/commitlint-config/pull/2) [`d4f7b19`](https://github.com/benhigham/commitlint-config/commit/d4f7b199931063bd0ca9c6a88be9bc4497e999c2) Thanks [@dependabot](https://github.com/apps/dependabot)! - build(deps-dev): bump lefthook from 1.11.5 to 1.11.6

## 0.1.0

### Minor Changes

- [`b3bfcbf`](https://github.com/benhigham/commitlint-config/commit/b3bfcbfc8e15118f09a1f8d4559240415647b30f) Thanks [@benhigham](https://github.com/benhigham)! - Setup project files and workflows
