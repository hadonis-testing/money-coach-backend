# fib's Development Guidelines

> This document contains the guidelines for developing the Finance Investment Backend.

> **Important**: `fib` stands for Finance Investment Backend.

## Table of Contents

- [fib's Development Guidelines](#fibs-development-guidelines)
  - [Table of Contents](#table-of-contents)
  - [Requirements](#requirements)
    - [Tools](#tools)
    - [Extensions](#extensions)
  - [Commit Conventions](#commit-conventions)
  - [Development](#development)

## Requirements

### Tools

- Environment: `Node.js v20.17.0`
  - You can download it from [here](https://nodejs.org/en/download/).
- Package manager: `npm`
  - To install the latest, run `npm i -g npm` after installing Node.js.
- Code editor: `Visual Studio Code`
  - You can download it from [here](https://code.visualstudio.com/).

### Extensions

- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Commit Conventions

Format: `<type>: <subject>`

Conventions:

- `add`: Add a new code what does not exist.
- `update`: Update an existing code.
- `fix`: Fix a bug, issue, or error, tool scan warning.
- `docs`: Update or add documentation.
- `feat`: Add a new feature. (Usually used in the PR title)
- `refactor`: Refactor an existing code.
- `delete`: Delete an existing code.

Examples:

- `add: add a new feature`
- `update: update a function`
- `fix: fix a bug`
- `docs: update contributing guidelines`
- `feat: add a new feature`
- `refactor: refactor a function`
- `delete: delete a function`

> **Note**: Please follow the conventions to keep the commit history clean and easy to read.
