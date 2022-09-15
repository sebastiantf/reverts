# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.1] - 2022-09-15

### Changed

- Changed all `public` methods into `external` as per Slither's [recommendations](https://github.com/sebastiantf/reverts/security/code-scanning/6) [`ef98bf9`](https://github.com/sebastiantf/reverts/commit/ef98bf9c57598bd1bfce15c5442d3fbf5b23f89f)

### Maintenance

- Upgraded vulnerable dependencies reported by Dependabot [`5704fa7`](https://github.com/sebastiantf/reverts/commit/5704fa7e0a50708e35fd6057fb41501ce13b8b3c)
- Re-introduced [Codecov](https://codecov.io/github/sebastiantf/reverts/) and SARIF uploads from CI [`8380c7a`](https://github.com/sebastiantf/reverts/commit/8380c7aaf4edf39787b379e67e8c04faba2c8fba)

## [1.0.0] - 2022-09-14

### Added

- First release of Reverts v1.0.0 package

[1.0.1]: https://github.com/sebastiantf/reverts/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/sebastiantf/reverts/releases/tag/v1.0.0
