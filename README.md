# react-fetching

[![Build Status](https://app.travis-ci.com/srianbury/react-fetching.svg?branch=main)](https://app.travis-ci.com/srianbury/react-fetching)

## Build with Guidance from

From https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe

## Storybook

run with `yarn storybook`

## Testing

run with `yarn jest` or `yarn jest-watchall` to watch for changes

## Manual Build + Release Process

1. `yarn jest`
2. `yarn rollup`
3. `yarn publish`
4. push changes

## TODO

- [ ] NEXT: auto publish/release with testing before release

  - [ ] Setup Auth tokens in Travis CI so it can update the GH repo and npm package
    - https://semantic-release.gitbook.io/semantic-release/usage/ci-configuration#authentication

- [ ] Thee published app does not have all the code
  - We need to run `yarn rollup` first but it's not working ATM
- [ ] I published it to npm.pkg.github.com but let's publish it to registry.npmjs.org instead
- [ ] Automate testing through Jenkins
- [ ] Add code coverage
- [ ] Add automatic build version updates (semver?)
  - https://github.com/semantic-release/semantic-release
- [ ] Ensure storybook is available after builds
  - https://storybook.js.org/docs/react/sharing/publish-storybook
- [ ] Automatic npm releases
- [ ] Push protect `main` branch
