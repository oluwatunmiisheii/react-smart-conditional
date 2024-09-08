# Contributing to Show Component

Thank you for your interest in contributing to the Show Component! We welcome contributions from the community to help improve and evolve this React utility.

## Getting Started

1. Fork the repository on GitHub.
2. Clone your fork locally.
3. Ensure you have pnpm installed globally. If not, install it with `npm install -g pnpm`.
4. Run `pnpm install` to install dependencies.
5. Create a branch for your contribution.

## Development Workflow

1. Make your changes in your feature branch.
2. Add or update tests as necessary.
3. Ensure all tests pass by running `pnpm test`.
4. Update documentation in README.md if you've changed functionality.
5. Run `pnpm run lint` to check for any linting issues.

## Pull Request Process

1. Ensure your code adheres to the existing style. We use Prettier for formatting.
2. Update the README.md with details of changes to the interface, if applicable.
3. Increase the version numbers in any examples files and the README.md to the new version that this Pull Request would represent. We use SemVer for versioning.
4. Your Pull Request will be reviewed by maintainers. Be open to feedback and be prepared to make changes if requested.

## Reporting Issues

If you find a bug or have a suggestion for improvement:

1. Check if the issue already exists in the GitHub issues.
2. If not, create a new issue, providing as much relevant information as possible.

## Coding Standards

- Follow React best practices and hooks rules.
- Write clear, readable, and maintainable code.
- Comment your code where necessary, especially for complex logic.
- Write meaningful commit messages.

## Testing

- Add unit tests for any new functionality.
- Ensure all existing tests pass before submitting a Pull Request.

## Documentation

- Update the README.md if you're adding or changing functionality.
- Include JSDoc comments for all functions and components.

## Package Management

We use pnpm for package management. Please make sure to use pnpm commands instead of npm or yarn.

- To add a new dependency: `pnpm add <package-name>`
- To add a dev dependency: `pnpm add -D <package-name>`
- To install all dependencies: `pnpm install`
- To run scripts defined in package.json: `pnpm run <script-name>`

Thank you for contributing to react-smart-conditional
