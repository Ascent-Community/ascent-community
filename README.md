# Ascent Community API

## Our purpose

Ascent purpose is to create a platform for developers who needs to find a job for any reasons (layoffs, extra profit, etc).

## Installation

Use a package manager of your choice in order to install all dependencies.

In the root folder of the project run:

```bash
# With NPM
npm install

# With Yarn
yarn install

# With PNPM
pnpm install
```

## Usage

First, create a .env file following the instructions on .env.example

Then, start your local database. Make sure you have Docker installed on your computer:

```bash
# With NPM
npm run db:start

# With Yarn
yarn db:start

# With PNPM
pnpm db:start
```

After that, deploy all migrations to the database:

```bash
# With NPM
npm run db:deploy

# With Yarn
yarn db:deploy

# With PNPM
pnpm db:deploy
```

<!-- You can also populate the db using seed command:

```bash
# With NPM
npm run db:seed

# With Yarn
yarn db:seed

# With PNPM
pnpm db:seed
``` -->

Now just run `dev` script.

```bash
# With NPM
npm run dev

# With Yarn
yarn dev

# With PNPM
pnpm dev
```
