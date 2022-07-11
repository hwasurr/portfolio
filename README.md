# my-toy-template

## Installation

```bash
# Boot docker containers (mysql, redis cluster)
docker compose up -d

# install dependencies
yarn install
```

## Get Started

```bash
# Nestjs backend server
yarn api dev
# Vite-react frontend server
yarn web dev
```

## Stacks

### codebase

- yarn berry workspace

### stacks

- Server: nestjs, redis, mysql(ORM->TypeORM)
- Web: vite-react, emotion, react-router, **todo**:storybook, **todo**:react-i18next
- validation: class-validator
- Testing: jest
- **todo**:CI/CD: github actions
- **todo**:Deploy setup: Docker, AWS CDK(ECS), front:Vercel
- coding rules: eslint, prettier, commitlint

### eslint rules

- airbnb
- prettier
- react
- react-hooks
- plugin:@typescript-eslint/eslint-recommended
- plugin:@typescript-eslint/recommended

### conventions

- commitlint

### vscode extenstions

- zipfs
- eslint
- prettier

### **todo**: vscode snippets

- react component(with,without props)
- nest module,controller,service,resolver
