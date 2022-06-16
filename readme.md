# Express sandbox

A sandbox repo to learn about [Express.js](http://expressjs.com/), [Sequelize](https://sequelize.org/), and [Postgres](https://www.postgresql.org/).

## Creating Postgres DB Locally

Here's a quick way to spin up a Postgres DB for development:

```shell
docker run --name express-sandbox-pg -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres
```

To connect to this DB directly to use `psql`, use `docker exec`:

```shell
docker exec -it express-sandbox-pg psql -U postgres -W postgres
```

## Resources

The few of Posts that this repo is derived from:

- https://dev.to/nedsoft/getting-started-with-sequelize-and-postgres-emp
- https://dev.to/nedsoft/testing-nodejs-express-api-with-jest-and-supertest-1km6
- https://medium.com/craft-academy/how-to-scaffold-expressjs-server-and-test-it-d2a2ab1d30e0
- https://medium.com/craft-academy/connecting-sequelize-with-expressjs-ab2a6fc44d12
