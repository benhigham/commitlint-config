---
"@benhigham/commitlint-config": patch
---

fix: remove atom parser preset incompatible with commitlint v20

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
