express-knex-example
====================

A barebones express + knex.js example application.

Dependencies
------------

These external dependencies need to be installed/set up before setting up this repository. Get them either through WSL (windows), homebrew (mac) or another package manager of your choosing.

- `postgres`
- `node.js` + `yarn`

Setup
-----

1. Clone the respository
    ```bash
    git clone https://github.com/benmelz/express-knex-example.git
    cd express-knex-example
    ```

2. Install packages from `npm` 
    ```bash
    yarn
    ```

3. Copy the example `.env` file and fill it out
    ```bash
    cp .env.example .env
    ```

4. Set up your database
    ```bash
    yarn run db:create
    yarn run db:migrate
    yarn run db:seed
    ```

5. Run the development server
    ```bash
    yarn run serve:hot
    ```
